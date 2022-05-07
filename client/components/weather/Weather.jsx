import React from 'react'

function Weather({ weatherData }) {
  const { description, temperature } = weatherData

  console.log(description)

  const getIcon = () => {
    switch (description) {
      case 'Clouds':
        return '/icons/weather/cloud.png'
      case 'Thunderstorm':
        return '/icons/weather/thunderstorm.png'
      case 'Rain':
        return '/icons/weather/rain.png'
      case 'Drizzle':
        return '/icons/weather/rain.png'
      case 'Clear':
        return '/icons/weather/sunny.png'
    }
  }

  return (
    <div>
      <div className="weather-container">
        <div className="weather-rectangle">
          <p className="weather-day">Today</p>
          <img src={getIcon()} alt="" className="weather-icon" />
          <p className="weather-temp">{temperature}&deg;C</p>
        </div>
        <div className="weather-rectangle">
          <p className="weather-day">Today</p>
          <img src={getIcon()} alt="" className="weather-icon" />
          <p className="weather-temp">{temperature}&deg;C</p>
        </div>
        <div className="weather-rectangle">
          <p className="weather-day">Today</p>
          <img src={getIcon()} alt="" className="weather-icon" />
          <p className="weather-temp">{temperature}&deg;C</p>
        </div>
      </div>
    </div>
  )
}

export default Weather
