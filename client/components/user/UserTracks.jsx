import React from 'react'
import { Link } from 'react-router-dom'

// TODO:
// --> .map to map out saved / completed tracks associated with user id
// --> that includes the names and if completed to have a 'date completed'

function UserTracks() {
  return (
    <section>
      <div className="page-image-container">
        <img
          src="images/placeholder-image.svg"
          alt="placeholder image of track"
        />
      </div>
      <div className="page-container">
        <h2 className="user-track-intro">Completed and Saved Tracks</h2>
        {/* use .map to render out all tracks for user by id */}
        <div>
          <Link to="/track">
            <div className="user-track-link">
              <p>Hauturu Highpoint Track</p>
              <img src="icons/arrow.svg" alt="" />
            </div>
          </Link>
          <Link to="/track">
            <div className="user-track-link">
              <p>Hauturu Highpoint Track</p>
              <img src="icons/arrow.svg" alt="" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default UserTracks
