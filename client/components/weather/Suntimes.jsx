import React from 'react'

function Suntimes({ weatherData }) {
  const { sunrise, sunset } = weatherData
  
  return (
    <div className="suntimes-container">
      <div>
        <p>Sunrise</p>
        <img src="icons/sunrise.svg" alt="" />
        <p>{sunrise}</p>
      </div>
      <div>
        <p>Sunset</p>
        <img src="icons/sunset.svg" alt="" />
        <p>{sunset}</p>
      </div>
    </div>
  )
}

export default Suntimes
