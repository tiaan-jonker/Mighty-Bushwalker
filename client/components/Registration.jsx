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
      <div className="register-container">
        <div className="register-box">
          <section className="form">
            <img
              className="register-image"
              src="https://res.cloudinary.com/dt7wm4h23/image/upload/v1651913955/Group_2_u0xxru.svg"
            ></img>
            <h1 className="register-text register-heading">REGISTER PROFILE</h1>
            <form className="registration">
              <div className="form-group">
                <label htmlFor="name" className="register-text">
                  Name
                </label>
                <input
                  className="form-control"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                ></input>
                <button
                  type="button"
                  className="btn btn-primary btn-block rounded-btn register-text"
                  onClick={handleClick}
                >
                  Register
                </button>
              </div>
            </form>
          </section>
        </div>
      </div>
    </>
  )
}

export default Registration
