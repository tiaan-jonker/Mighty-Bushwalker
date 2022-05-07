import React, { useState, useEffect } from 'react'

import { calculateDistanceBetweenPoints } from './tracksHelper'

function TrackItem({ trackData }) {
  const { id, name, difficulty, days, hours, lat, lon, length, distanceAway } =
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

  function truncatedName(str) {
    return str.length > 20 ? str.slice(0, 20 - 1) + '…' : str
  }

  return (
    <li>
      <h2 className="track-list-name">{truncatedName(name)}</h2>
      <span
        className="track-difficulty"
        style={{ backgroundColor: getBackgroundColor() }}
      >
        {difficulty}
      </span>
      <div className="track-other-details">
        <p>
          Length: {length}km • Est. {hours}hrs • {distanceAway}km Away
        </p>
      </div>
    </li>
  )
}

export default TrackItem

// hours
