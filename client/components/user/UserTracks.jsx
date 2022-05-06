import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getCompletedUserTracks, getSavedUserTracks } from './userHelper'

// TODO:
// --> .map to map out saved / completed tracks associated with user id
// --> that includes the names and if completed to have a 'date completed'

function UserTracks() {
  const [userCompletedTracks, setUserCompletedTracks] = useState([
    { track_id: 0 },
  ])
  const [userSavedTracks, setUserSavedTracks] = useState([{ track_id: 0 }])
  const { id } = useParams()

  useEffect(() => {
    getCompletedUserTracks(id)
      .then((completed) => {
        return setUserCompletedTracks(completed)
      })
      .catch((err) => console.log(err.message))
    getSavedUserTracks(id)
      .then((saved) => {
        return setUserSavedTracks(saved)
      })
      .catch((err) => console.log(err.message))
  }, [id])

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
        {userCompletedTracks.map((track) => {
          return (
            <div key={track.track_id}>
              <Link to={`/track/${track.track_id}`}>
                <div className="user-track-link">
                  <p>{track.name}</p>
                  <p>completed</p>
                  <img src="icons/arrow.svg" alt="" />
                </div>
              </Link>
            </div>
          )
        })}
        {userSavedTracks.map((track) => {
          return (
            <div key={track.track_id}>
              <Link to={`/track/${track.track_id}`}>
                <div className="user-track-link">
                  <p>{track.name}</p>
                  <p>saved</p>
                  <img src="icons/arrow.svg" alt="" />
                </div>
              </Link>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default UserTracks
