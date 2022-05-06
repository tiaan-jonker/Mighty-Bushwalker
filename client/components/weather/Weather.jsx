import React, { useState } from 'react'

function Weather({ weatherData }) {
  const { description, currentTemperature } = weatherData

  const getIcon = () => {
    switch (description) {
      case 'Clouds':
        return 'icons/cloudy.svg'
      case 'Thunderstorm':
        return 'icons/thunder.svg'
      case 'Rain':
        return 'icons/rain.svg'
      case 'Drizzle':
        return 'icons/drizzle.svg'
      case 'Clear':
        return 'icons/sunny.svg'
    }
  }

  return (
    <div>
      <p>Today</p>
      <div className="weather-circle">
        <img src={getIcon()} alt="" className="weather-icon" />
      </div>
      <p>
        {description} / {currentTemperature}
      </p>
    </div>
  )
}

export default Weather
