import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import {
  getAmountOfTracksCompleted,
  getDistanceHiked,
  getRanks,
} from './userHelper'

function UserStats({ user }) {
  const tracks = useSelector((state) => state.tracks)
  const [tracksCompleted, setTracksCompleted] = useState(0)
  const [distanceHiked, setDistanceHiked] = useState(0)
  const [rankPercent, setRankPercent] = useState(0)
  const [rank, setRank] = useState({})
  const [nextRank, setNextRank] = useState({})

  useEffect(() => {
    setTracksCompleted(getAmountOfTracksCompleted(tracks))
    setDistanceHiked(getDistanceHiked(tracks))
  }, [tracks])

  useEffect(() => {
    getRanks()
      .then((ranks) => {
        const xp = user.xp
        const ranksToCheck = ranks.reverse()
        for (let i = 0; i < ranksToCheck.length; i++) {
          if (xp >= ranksToCheck[i].xp) {
            setRank(ranksToCheck[i])
            setNextRank(ranksToCheck[i - 1])
            return null
          }
        }
        return null
      })
      .catch((err) => console.log(err))
  }, [user.xp])

  useEffect(() => {
    setRankPercent((user.xp / nextRank.xp) * 100)
  })

  return (
    <>
      <div className="stats-container">
        <div className="stat-info">
          <span className="stat-rectangle">
            <img src="/icons/trophy.svg" alt="" className="stat-icon" />
            <div className="stat-description">Hiking level</div>
            <div className="user-stat">{rank.rank_name}</div>
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
        <div className="xp-top">
          <p className="total-xp-text">Total XP</p>
          <p>Next Level: {nextRank.rank_name}</p>
        </div>
        <div className="xp-bar-container">
          <div
            className="xp-bar"
            style={{
              width: `${rankPercent}%`,
            }}
          ></div>
        </div>
        <div className="xp-bottom">
          <p>
            {user.xp} / {nextRank.xp} XP
          </p>
        </div>
      </div>
    </>
  )
}

export default UserStats
