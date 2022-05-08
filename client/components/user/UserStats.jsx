import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { getAmountOfTracksCompleted, getDistanceHiked } from './userHelper'

function UserStats({ user }) {
  const tracks = useSelector((state) => state.tracks)
  const [tracksCompleted, setTracksCompleted] = useState(0)
  const [distanceHiked, setDistanceHiked] = useState(0)
  const [rankPercent, setRankPercent] = useState(0)
  const nextLevel = 4000

  useEffect(() => {
    setTracksCompleted(getAmountOfTracksCompleted(tracks))
    setDistanceHiked(getDistanceHiked(tracks))
    setRankPercent((user.xp / nextLevel) * 100)
  }, [tracks])

  return (
    <>
      <div className="stats-container">
        <div className="stat-info">
          <span className="stat-rectangle">
            <img src="/icons/trophy.svg" alt="" className="stat-icon" />
            <div className="stat-description">Hiking level</div>
            <div className="user-stat">{user.rank}</div>
          </span>
        </div>
        <div className="stat-info">
          <span className="stat-rectangle">
            <img src="/icons/hiker.svg" alt="" className="stat-icon" />
            <div className="stat-description">Tracks Hiked</div>
            <div className="user-stat">{tracksCompleted}</div>
          </span>
        </div>
        <div className="stat-info">
          <span className="stat-rectangle">
            <img src="/icons/compass.svg" alt="" className="stat-icon" />
            <div className="stat-description">Distance Hiked</div>
            <div className="user-stat">{distanceHiked}km</div>
          </span>
        </div>
      </div>
      <div className="xp-container">
        <div
          className="xp-bar-container"
          style={{ width: `10em`, height: '2em', backgroundColor: 'white' }}
        >
          <div
            className="xp-bar"
            style={{
              width: `${rankPercent}%`,
              height: '100%',
              backgroundColor: 'navy',
            }}
          ></div>
        </div>
      </div>
    </>
  )
}

export default UserStats
