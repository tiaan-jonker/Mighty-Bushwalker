import React from 'react'

function TrackItem({ trackData }) {
  const { id, name, difficulty, days, hours, lat, lon, length } = trackData

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
              {length} km • Est. {hours}hrs
            </p>
          </div>
        </div>
        <img src="/images/bg/bg-1.webp" alt="" className="track-banner-img" />
      </div>
    </li>
  )
}

export default TrackItem

// hours
