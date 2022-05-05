import React, { useState, useEffect } from 'react'
import Weather from './Weather'
import Forecast from './Forecast'
import { WEATHER_API_KEY } from '../../../weather'
import { database } from 'pg/lib/defaults'

function WeatherInfo() {
  const [weatherData, setWeatherData] = useState([])
  const [forecastData, setForecastData] = useState([])

  const lat = '-36.212791'
  const lon = '175.402013'
  const todayUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${WEATHER_API_KEY}`
  const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast/?lat=${lat}&lon=${lon}&units=metric&appid=${WEATHER_API_KEY}`

  useEffect(() => {
    fetchWeatherData()
      .then((weather) => {
        setWeatherData(weather)
      })
      .catch((err) => console.error(err))

    fetchForecastWeatherData()
      .then((forecast) => {
        console.log(forecast)
        setForecastData(forecast)
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
    return fetch(todayUrl)
      .then((response) => handleResponse(response))
      .then((weather) => {
        if (Object.entries(weather).length) {
          const mappedData = mapWeatherData(weather)
          return mappedData
        }
      })
  }

  const fetchForecastWeatherData = () => {
    return fetch(forecastUrl)
      .then((response) => handleResponse(response))
      .then((forecastWeather) => {
        if (Object.entries(forecastWeather).length) {
          return forecastWeather.list
            .filter((forecast) => forecast.dt_txt.match(/09:00:00/))
            .map(mapWeatherData)
        }
      })
  }

  function mapWeatherData(weatherData) {
    const mapped = {
      description: weatherData.weather[0].main,
      icon: weatherData.weather[0].icon,
      currentTemperature: Math.round(weatherData.main.temp),
      sunrise: new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString(
        'en-IN'
      ),
      sunset: new Date(weatherData.sys.sunset * 1000).toLocaleTimeString(
        'en-IN'
      ),
    }

    // if (weatherData.dt_txt) {
    //   mapped.dt_txt = weatherData.dt.txt
    // }

    return mapped
  }

  return (
    <div>
      <Weather weatherData={weatherData} />
      <Forecast forecastData={forecastData} />
    </div>
  )
}

export default WeatherInfo
