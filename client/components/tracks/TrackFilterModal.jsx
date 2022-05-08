import React from 'react'
import { RiCloseLine } from 'react-icons/ri'

function TrackFilterModal({ setIsOpenModal }) {
  return (
    <>
      <div className="darkBG" onClick={() => setIsOpenModal(false)} />
      <div className="centered">
        <div className="modal">
          <div className="modalHeader">
            <h5 className="heading">Dialog</h5>
          </div>
          <button className="closeBtn" onClick={() => setIsOpenModal(false)}>
            <RiCloseLine style={{ marginBottom: '-3px' }} />
          </button>
          <div className="modalActions">
            <div className="actionsContainer">
              <button
                className="cancelBtn"
                onClick={() => setIsOpenModal(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TrackFilterModal
