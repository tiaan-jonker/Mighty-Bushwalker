import React from 'react'
import { useDispatch } from 'react-redux'
import { closeModal } from '../../actions/tracks'

function BadgesModal({ badgeModalIcons }) {
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(closeModal())
  }

  return (
    <>
      <div className="darkBG" />
      <div className="modal-centered">
        <div className="modal">
          <div className="modal-header">
            <h5 className="heading">Achievement</h5>
          </div>
          <div className="modal-content flex-space-evenly">
            <p>Achievement earned</p>
            {badgeModalIcons.map((badgeImage) => (
              <span key={badgeImage.id} className="badge-circle">
                <img
                  src={`/icons/badges/${badgeImage.image}.png`}
                  alt=""
                  className="badge-image"
                />
              </span>
            ))}

            <button onClick={handleClick}>Close modal</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default BadgesModal
