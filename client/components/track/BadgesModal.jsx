import React from 'react'
import { useDispatch } from 'react-redux'
import { closeModal } from '../../actions/tracks'

function BadgesModal() {
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(closeModal)
  }

  return (
    <>
      <div className="darkBG" />
      <div className="modal-centered">
        <div className="modal">
          <div className="modal-header">
            <h5 className="heading">Are you sure?</h5>
          </div>
          <div className="modal-content flex-space-evenly">
            <p>Achievement earned</p>
            <button onClick={handleClick}>Close modal</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default BadgesModal
