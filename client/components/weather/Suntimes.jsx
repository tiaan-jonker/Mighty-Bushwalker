import React from 'react'

function Suntimes({ weatherData }) {
  const { sunrise, sunset } = weatherData

  return (
    <div className="suntimes-container">
      <div>
        <p>Sunrise</p>
        <div className="weather-circle">
          <img src="icons/sunrise.svg" alt="" className="weather-icon" />
        </div>
        <p>{sunrise}</p>
      </div>
      <div>
        <p>Sunset</p>
        <div className="weather-circle">
          <img src="icons/sunset.svg" alt="" className="weather-icon" />
        </div>
        <p>{sunset}</p>
      </div>
    </div>
  )
}

export default Suntimes
