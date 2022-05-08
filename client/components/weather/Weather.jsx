import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchWeather } from '../../actions/weather'

function Weather() {
  const weather = useSelector((state) => state.weather)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchWeather())
  })

  const getIcon = () => {
    switch (weather.description) {
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
          <p className="weather-temp">{weather.temperature}&deg;C</p>
        </div>
        <div className="weather-rectangle">
          <p className="weather-day">Today</p>
          <img src={getIcon()} alt="" className="weather-icon" />
          <p className="weather-temp">{weather.temperature}&deg;C</p>
        </div>
        <div className="weather-rectangle">
          <p className="weather-day">Today</p>
          <img src={getIcon()} alt="" className="weather-icon" />
          <p className="weather-temp">{weather.temperature}&deg;C</p>
        </div>
      </div>
    </div>
  )
}

export default Weather
