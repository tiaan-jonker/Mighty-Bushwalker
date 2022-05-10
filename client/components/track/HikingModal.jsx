import React, { useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { hikeTrack, unhikeTrack } from '../../actions/tracks'

function HikingModal({ setIsOpenModal, canCompleteAgain, outHiking }) {
  const { id } = useParams() // track ID
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user)
  const [isHiking, setIsHiking] = useState(false)

  function handleSubmit() {
    dispatch(hikeTrack(Number(id), user.id, form))
    setIsOpenModal(false)
  }

  function handleYesClick() {
    setIsHiking(true)
  }

  function closeModal() {
    setIsOpenModal(false)
  }

  function handleUnhike() {
    dispatch(unhikeTrack(Number(id), user.id))
    setIsOpenModal(false)
  }

  const [form, setForm] = useState(
    user.displayName !== 'Anon'
      ? {
          displayName: user.displayName,
          status: user.status,
          checked: true,
        }
      : {
          displayName: user.name,
          status: '',
          checked: false,
        }
  )

  function handleChange(e) {
    const { name, value } = e.target
    setForm({
      ...form,
      [name]: value,
    })
  }

  function handleCheckClick() {
    setForm({
      ...form,
      checked: form.checked ? false : true,
    })
  }

  return (
    <>
      <div className="darkBG" />
      <div className="modal-centered">
        <div className="modal">
          {!outHiking && canCompleteAgain && (
            <>
              {!isHiking && (
                <>
                  <div className="modal-header">
                    <h5 className="heading">Are you hiking this track</h5>
                  </div>
                  <div className="modal-content flex-space-evenly">
                    <button
                      onClick={handleYesClick}
                      className="modal-logout-yes"
                    >
                      Yes
                    </button>
                    <button
                      onClick={() => setIsOpenModal(false)}
                      className="modal-logout-no"
                    >
                      No
                    </button>
                  </div>
                </>
              )}

              {isHiking && (
                <>
                  <div className="modal-content flex-space-evenly">
                    <h2>Leave A Note For Other Hikers</h2>
                    <form className="registration">
                      {form.checked && (
                        <>
                          <label htmlFor="displayName">Display Name</label>
                          <input
                            name="displayName"
                            value={form.displayName}
                            onChange={handleChange}
                          ></input>
                          <label htmlFor="status">Status</label>
                          <input
                            name="status"
                            value={form.status}
                            onChange={handleChange}
                          ></input>
                        </>
                      )}
                      <input
                        name="checked"
                        type="checkbox"
                        defaultChecked={form.checked}
                        onChange={handleCheckClick}
                      ></input>
                      <label htmlFor="checked">Leave Note</label>
                      <button onClick={closeModal}>x</button>
                      <button type="button" onClick={handleSubmit}>
                        Start Hiking
                      </button>
                    </form>
                  </div>
                </>
              )}
            </>
          )}

          {!canCompleteAgain && (
            <>
              <h2>Sorry you have already Completed this track today</h2>
              <button onClick={closeModal}>x</button>
            </>
          )}

          {outHiking && (
            <>
              <button type="button" onClick={handleUnhike}>
                Un Hike
              </button>
            </>
          )}
        </div>
      </div>
    </>
  )
}

export default HikingModal
