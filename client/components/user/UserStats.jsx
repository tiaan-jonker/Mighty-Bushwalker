import React, { useState, useEffect } from 'react'
import {
  getAmountOfTracksCompleted,
  getUserTracks,
  getDistanceHiked,
} from './userHelper'

function UserStats({ user }) {
  const [userTracks, setUserTracks] = useState([{ track_id: 0 }])
  const [tracksCompleted, setTracksCompleted] = useState(0)
  const [distanceHiked, setDistanceHiked] = useState(0)

  useEffect(() => {
    getUserTracks(user.id)
      .then((tracks) => {
        setTracksCompleted(getAmountOfTracksCompleted(tracks))
        setDistanceHiked(getDistanceHiked(tracks))
        return setUserTracks(tracks)
      })
      .catch((err) => console.log(err.message))
  }, [user.id])

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
        <p>XP bar placeholder</p>
      </div>
    </>
  )
}

export default UserStats
