import React from 'react'
import { Link } from 'react-router-dom'
import { truncatedName, randomNumGenForImage } from '../../utils'
import TrackImg from './TrackImg'
// import { calculateDistanceBetweenPoints } from '../tracks/tracksHelper'
import { useSelector } from 'react-redux'

function UserTracks() {
  const userTracks = useSelector((state) => state.tracks)

  const getBackgroundColor = (difficulty) => {
    switch (difficulty) {
      case 'Advanced':
        return '#E75345'
      case 'Intermediate':
        return '#04D8CB'
      case 'Easy':
        return '#10B470'
    }
  }

  return (
    <section>
      <div className="page-container mg-bottom-50 container-bg-green">
        <div>
          <h2 className="user-intro">My tracks</h2>
          <h3 className="user-intro-sub">Saved and completed tracks</h3>
        </div>
        {userTracks.map((track) => {
          return (
            (track.completed == 1 || track.saved == 1) && (
              <div key={track.id} className="user-track-banner">
                <Link to={`/track/${track.id}`}>
                  {/* <Link to={`/track/1`}> */}
                  <div className="track-banner">
                    {track.completed ? (
                      <span className="status-indicator completed">
                        Completed
                      </span>
                    ) : (
                      <span className="status-indicator saved">Saved</span>
                    )}

                    <div className="track-banner-info">
                      <div className="track-name-difficulty-container">
                        <h2 className="track-list-name">
                          {truncatedName(track.name)}
                        </h2>
                        <span
                          className="track-difficulty"
                          style={{
                            backgroundColor: getBackgroundColor(
                              track.difficulty
                            ),
                          }}
                        >
                          {track.difficulty}
                        </span>
                      </div>
                      <div className="track-other-details">
                        <p>
                          Length: {track.length}km • Est. {track.hours}hrs •{' '}
                          {track.points}pts • 80 km away
                        </p>
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
