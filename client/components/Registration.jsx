import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { fetchMapAndTrackDataSuccess } from '../actions/tracks'
import { setUser } from '../actions/user'
import { addUser } from '../apis/users'
import { getUser, getUserTracks } from './user/userHelper'

function Registration() {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user)
  const navigate = useNavigate()

  const [form, setForm] = useState({
    auth0Id: '',
    name: '',
    email: '',
    description: '',
  })

  useEffect(() => {
    setForm({
      auth0Id: user.auth0Id,
      name: user.name,
      email: user.email,
      description: user.description,
    })
  }, [user])

  function handleChange(e) {
    const { name, value } = e.target
    setForm({
      ...form,
      [name]: value,
    })
  }

  async function handleClick(e) {
    e.preventDefault()
    // registerUser(form, authUser, history.push)
    try {
      await addUser(form)
      const userData = await getUser(user.auth0Id)
      dispatch(setUser(userData))
      const trackdata = await getUserTracks(userData.id)
      dispatch(fetchMapAndTrackDataSuccess(trackdata))
      if (userData) {
        navigate('/')
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <section className="form">
        <h2>Register Profile</h2>
        <form className="registration">
          <label htmlFor="auth0Id">auth0Id</label>
          <input
            name="auth0Id"
            value={form.auth0Id}
            onChange={handleChange}
            disabled={true}
          ></input>

          <label htmlFor="name">Name</label>
          <input name="name" value={form.name} onChange={handleChange}></input>

          <label htmlFor="email">Email</label>
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            disabled={true}
          ></input>

          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            cols={3}
          ></textarea>
          <button type="button" onClick={handleClick}>
            Register
          </button>
        </form>
      </section>
    </>
  )
}

export default Registration
