import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchWeather } from '../../actions/weather'
import { fetchForecast } from '../../actions/forecast'

function Weather() {
  const weather = useSelector((state) => state.weather)
  const weatherIcon = useSelector((state) => state.weatherIcon)
  const forecast = useSelector((state) => state.forecast)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchWeather())
    dispatch(fetchForecast())
  }, [])

  const getIcon = async () => {
    const weatherIconState = await weatherIcon

    switch (weatherIconState) {
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
        {forecast.slice(0, 2).map((forecastData, index) => (
          <div key={index} className="weather-rectangle">
            <p className="weather-day">Tomorrow</p>
            <img
              src="/icons/weather/rain.png"
              alt=""
              className="weather-icon"
            />
            <p className="weather-temp">{forecastData.temperature}&deg;C</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Weather
