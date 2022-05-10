import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { truncatedName, randomNumGenForImage } from '../../utils'
import TrackImg from './TrackImg'
import { useSelector } from 'react-redux'

function UserTracks() {
  const userTracks = useSelector((state) => state.tracks)
  const [checkForNone, setCheckForNone] = useState(0)

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

  useEffect(() => {
    let count = 0
    for (let i = 0; i < userTracks.length; i++) {
      count += userTracks[i].completed + userTracks[i].saved
    }
    setCheckForNone(count)
  })

  return (
    <section style={{ height: '100%' }}>
      <div className="page-container mg-bottom-50 container-bg-blue">
        <div>
          <h2 className="user-intro">My tracks</h2>
          <h3 className="user-intro-sub">Saved and completed tracks</h3>
        </div>
        {checkForNone == 0 ? (
          <div>Head to Explore to find your first track!</div>
        ) : (
          userTracks.map((track) => {
            const { id, completed, points, name, difficulty, length, hours } =
              track

            return (
              (completed == 1 || track.saved == 1) && (
                <div key={id} className="user-track-banner">
                  <Link to={`/track/${id}`}>
                    <div className="track-banner">
                      {completed ? (
                        <span className="status-indicator completed">
                          Completed
                        </span>
                      ) : (
                        <span className="status-indicator saved">Saved</span>
                      )}
                      {completed ? (
                        ''
                      ) : (
                        <div className="points-container">{points} XP</div>
                      )}

                      <div className="track-banner-info">
                        <div className="track-name-difficulty-container">
                          <h2 className="track-list-name">
                            {truncatedName(name)}
                          </h2>
                          <span
                            className="track-difficulty"
                            style={{
                              backgroundColor: getBackgroundColor(difficulty),
                            }}
                          >
                            {difficulty}
                          </span>
                        </div>
                        <div className="track-other-details">
                          <p>
                            Length: {length}km • Est. {hours}hrs • 80 km away
                          </p>
                        </div>
                      </div>
                      <TrackImg randomNum={randomNumGenForImage} />
                    </div>
                  </Link>
                </div>
              )
            )
          })
        )}
      </div>
    </section>
  )
}

export default UserTracks
