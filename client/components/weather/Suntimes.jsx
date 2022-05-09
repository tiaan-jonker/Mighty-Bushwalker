import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchWeather } from '../../actions/weather'

function Suntimes() {
  const weather = useSelector((state) => state.weather)
  const dispatch = useDispatch()

  const { sunrise, sunset } = weather

  useEffect(() => {
    dispatch(fetchWeather())
  })

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
