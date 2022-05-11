import React from 'react'

function LogoutModal({ setIsOpenModal, handleLogout }) {
  return (
    <div className="modal-container">
      <div>
        <div className="modal-centered">
          <div className="modal">
            <div className="modal-header">
              <h5 className="heading">Logout?</h5>
            </div>
            <div className="modal-content flex-space-evenly">
              <button onClick={handleLogout} className="modal-logout-yes">
                Yes
              </button>
              <button
                onClick={() => setIsOpenModal(false)}
                className="modal-logout-no"
              >
                No
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="darkBG" />
    </div>
  )
}

export default LogoutModal
