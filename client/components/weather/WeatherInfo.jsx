import React, { useState, useEffect } from 'react'
import {
  faCloud,
  faBolt,
  faCloudRain,
  faCloudShowersHeavy,
  faSnowflake,
  faSun,
  faSmog,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { WEATHER_API_KEY } from '../../../weather'

function WeatherInfo() {
  const [weatherData, setWeatherData] = useState([])

  const lat = '-36.212791'
  const lon = '175.402013'
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`

  useEffect(() => {
    fetchWeatherData()
      .then((weather) => {
        setWeatherData(weather)
        console.log(weatherData)
      })
      .catch((err) => console.error(err))
  }, [])

  const handleResponse = (response) => {
    if (response.ok) {
      return response.json()
    } else {
      throw new Error('Please Enable your Location in your browser!')
    }
  }

  const fetchWeatherData = () => {
    return fetch(url)
      .then((response) => handleResponse(response))
      .then((weather) => {
        if (Object.entries(weather).length) {
          const mappedData = mapDataToWeatherInterface(weather)
          return mappedData
        }
      })
  }

  function mapDataToWeatherInterface(weatherData) {
    const mapped = {
      description: weatherData.weather[0].main,
      currentTemperature: Math.round(weatherData.main.temp),
      sunrise: new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString(
        'en-IN'
      ),
    }
    return mapped
  }
  
  return <div>{}</div>
}

export default WeatherInfo
