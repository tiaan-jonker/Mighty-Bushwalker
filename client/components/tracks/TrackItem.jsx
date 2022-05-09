import React, { useState, useEffect } from 'react'
import { truncatedName } from '../../utils'
import { Link } from 'react-router-dom'

function TrackItem({ trackData, randomNum }) {
  const { id, name, difficulty, hours, points, length, distanceAway } =
    trackData

  const getBackgroundColor = () => {
    switch (difficulty) {
      case 'Advanced':
        return '#E75345'
      case 'Intermediate':
        return '#04D8CB'
      case 'Easy':
        return '#10B470'
    }
  }

  // function truncatedName(str) {
  //   return str.length > 20 ? str.slice(0, 20 - 1) + '…' : str
  // }

  return (
    <Link to={`/track/${id}`}>
      <li className="">
        <div className="track-banner">
          <div className="track-banner-info">
            <div className="track-name-difficulty-container">
              <h2 className="track-list-name">{truncatedName(name)}</h2>
              <span
                className="track-difficulty"
                style={{ backgroundColor: getBackgroundColor() }}
              >
                {difficulty}
              </span>
            </div>
            <div className="track-other-details">
              <p>
                Length: {length}km • Est. {hours}hrs • {distanceAway}km Away
              </p>
            </div>
          </div>
          <div className="points-container">{points} XP</div>
          <img
            src={`/images/bg/bg-${randomNum()}.webp`}
            alt=""
            className="track-banner-img"
          />
        </div>
      </li>
    </Link>
  )
}

export default TrackItem

// hours
