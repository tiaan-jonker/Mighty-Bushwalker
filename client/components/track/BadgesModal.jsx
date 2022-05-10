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
            <h5 className="heading">Congrats!</h5>
            <p className="sub-heading">You have earned...</p>
          </div>
          <div className="modal-badge-content">
            {badgeModalIcons.map((badge) => (
              <div key={badge.id} className="modal-badge-container">
                <span className="model-badge-circle">
                  <img
                    src={`/icons/badges/${badge.image}.png`}
                    alt=""
                    className="badge-image"
                  />
                </span>
                <h5 className="modal-badge-heading">{badge.name}</h5>
                <p className="modal-badge-criteria">{badge.criteria}</p>
              </div>
            ))}

            <div className="modal-badge-close-container">
              <button className="modal-badge-close" onClick={handleClick}>
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BadgesModal
