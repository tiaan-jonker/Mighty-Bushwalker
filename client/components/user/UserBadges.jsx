import React from 'react'

function ProfileBadgeList() {
  return (
    <section>
      <div className="page-image-container">
        <img
          src="images/placeholder-image.svg"
          alt="placeholder image of track"
        />
      </div>
      <div className="page-container">
        <h2 className="user-badges-intro">My badges</h2>
        <div className="badge-grid">
          <div className="badge-container">
            <span className="badge-circle"></span>
            <p className="badge-title">Birdman</p>
            <p className="badge-description">Completed 3 bird spotting walks</p>
          </div>
          <div className="badge-container">
            <span className="badge-circle"></span>
            <p className="badge-title">Birdman</p>
            <p className="badge-description">Completed 3 bird spotting walks</p>
          </div>
          <div className="badge-container">
            <span className="badge-circle"></span>
            <p className="badge-title">Birdman</p>
            <p className="badge-description">Completed 3 bird spotting walks</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProfileBadgeList
