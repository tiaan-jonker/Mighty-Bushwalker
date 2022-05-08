import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getUserTracks } from './userHelper'
import { truncatedName, randomNumGenForImage } from '../../utils'
import TrackImg from './TrackImg'

function UserTracks() {
  const [userTracks, setUserTracks] = useState([{ track_id: 0 }])

  const { id } = useParams()

  useEffect(() => {
    getUserTracks(id)
      .then((tracks) => {
        return setUserTracks(tracks)
      })
      .catch((err) => console.log(err.message))
  }, [id])

  return (
    <section>
      <div className="page-container mg-bottom-50">
        <div>
          <h2 className="user-intro">My tracks</h2>
          <h3 className="user-intro-sub">Saved and completed tracks</h3>
        </div>
        {userTracks.map((track) => {
          return (
            (track.completed == 1 || track.saved == 1) && (
              <div key={track.track_id} className="user-track-banner">
                <Link to={`/track/${track.track_id}`}>
                  {/* <Link to={`/track/1`}> */}
                  <div className="track-banner">
                    <div className="track-banner-info">
                      <div className="track-name-difficulty-container">
                        <h2 className="track-list-name">
                          {truncatedName(track.name)}
                        </h2>
                        <span
                          className="track-difficulty"
                          // style={{ backgroundColor: getBackgroundColor() }}
                        >
                          Difficult
                        </span>
                      </div>
                      <div className="track-other-details">
                        <p>Length: 58km • Est. 8hrs • 20km Away</p>
                      </div>
                    </div>
                    <TrackImg randomNum={randomNumGenForImage} />
                  </div>
                </Link>
              </div>
            )
          )
        })}
      </div>
    </section>
  )
}

export default UserTracks
