import React from 'react'

function Suntimes({ weatherData }) {
  const { sunrise, sunset } = weatherData

  return (
    <div className="weather-container">
      <div className="suntime-rectangle">
        <p className="weather-day">Sunrise</p>
        <img src="/icons/weather/sunrise.png" alt="" className="weather-icon" />
        <p className="weather-temp">{sunrise}</p>
      </div>
      <div className="suntime-rectangle">
        <p className="weather-day">Sunset</p>
        <img src="/icons/weather/sunset.png" alt="" className="weather-icon" />
        <p className="weather-temp">{sunset}</p>
      </div>
    </div>
  )
}

export default Suntimes
