import React, { useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { hikeTrack, unhikeTrack } from '../../actions/tracks'
import { RiCloseLine } from 'react-icons/ri'

function HikingModal({
  setIsOpenModal,
  cantCompleteAgain,
  outHiking,
  hikingCurrentTrack,
}) {
  const { id } = useParams() // track ID
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user)

  function handleSubmit() {
    dispatch(hikeTrack(Number(id), user.id, form))
    setIsOpenModal(false)
  }

  function closeModal() {
    setIsOpenModal(false)
  }

  function handleUnhike() {
    dispatch(unhikeTrack(Number(id), user.id))
    setIsOpenModal(false)
  }

  function hikeThisTrack() {
    dispatch(unhikeTrack(Number(id), user.id))
    setIsOpenModal(true)
  }

  const [form, setForm] = useState(
    user.displayName !== 'Anon' // check if user has previously chosen not leave a note i.e. display name was saved as anon previously
      ? {
          displayName: user.displayName,
          status: user.status,
          stayAnonymous: true,
        }
      : {
          displayName: user.name,
          status: '',
          stayAnonymous: false,
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
      stayAnonymous: form.stayAnonymous ? false : true,
    })
  }

  return (
    <>
      <div className="darkBG" />
      <div className="modal-container">
        <div className="modal-centered">
          <div className="modal">
            {/* where the user is not currently hiking*/}
            {outHiking === 0 && !cantCompleteAgain && (
              <>
                <div className="flex-space-evenly modal-hiking-container">
                  <div className="modal-header modal-text">
                    <h2 className="heading">Leave A Note For Other Hikers</h2>
                  </div>
                  <button className="closeBtn" onClick={closeModal}>
                    <RiCloseLine style={{ marginBottom: '-3px' }} />
                  </button>
                  <form className="registration">
                    {!form.stayAnonymous && (
                      <>
                        <label htmlFor="displayName" className="checkbox-text">
                          Display Name
                        </label>
                        <input
                          className="modal-form"
                          name="displayName"
                          value={form.displayName}
                          onChange={handleChange}
                        />
                        <label htmlFor="status" className="checkbox-text">
                          Status
                        </label>
                        <input
                          className="modal-form"
                          name="status"
                          value={form.status}
                          onChange={handleChange}
                        />
                      </>
                    )}
                    <div className="modal-hiking-container">
                      <div className="anon-container">
                        <label
                          htmlFor="stayAnonymous"
                          className="checkbox-text"
                        >
                          Stay Anonymous
                        </label>
                        <input
                          className="checkbox-text"
                          name="stayAnonymous"
                          type="checkbox"
                          defaultChecked={form.stayAnonymous}
                          onChange={handleCheckClick}
                        />
                      </div>
                      <button
                        className="hiking-modal-btn"
                        type="button"
                        onClick={handleSubmit}
                      >
                        Start Hiking
                      </button>
                    </div>
                  </form>
                </div>
              </>
            )}

            {/* where the user is not currently hiking but has already completed this track today*/}
            {cantCompleteAgain && (
              <>
                <div className="flex-space-evenly modal-hiking-container">
                  <button className="closeBtn" onClick={closeModal}>
                    <RiCloseLine style={{ marginBottom: '-3px' }} />
                  </button>
                  <p className="heading">
                    Sorry you have already completed this track today
                  </p>
                  <button className="hiking-modal-btn" onClick={closeModal}>
                    Come back tomorrow
                  </button>
                </div>
              </>
            )}

            {/* where the user is  currently hiking on this track */}
            {outHiking > 0 && hikingCurrentTrack > 0 && !cantCompleteAgain && (
              <>
                <div className="flex-space-evenly modal-hiking-container">
                  <button className="closeBtn" onClick={closeModal}>
                    <RiCloseLine style={{ marginBottom: '-3px' }} />
                  </button>
                  <h1 className="heading">Changed your mind?</h1>
                  <button
                    className="hiking-modal-btn"
                    type="button"
                    onClick={handleUnhike}
                  >
                    Stop hike
                  </button>
                </div>
              </>
            )}

            {/* where the user is  currently hiking on another track */}
            {outHiking > 0 && hikingCurrentTrack === 0 && !cantCompleteAgain && (
              <>
                <div className="flex-space-evenly modal-hiking-container">
                  <button className="closeBtn" onClick={closeModal}>
                    <RiCloseLine style={{ marginBottom: '-3px' }} />
                  </button>
                  <h1 className="heading">
                    It looks like your hiking elsewhere
                  </h1>
                  <button
                    className="hiking-modal-btn"
                    type="button"
                    onClick={hikeThisTrack}
                  >
                    Hike this track
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default HikingModal
