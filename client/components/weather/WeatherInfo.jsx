import React, { useState, useEffect } from 'react'
import Weather from './Weather'
import Suntimes from './Suntimes'
import { WEATHER_API_KEY } from '../../../weather'
import { Box, Tab } from '@mui/material'
import { TabContext, TabList, TabPanel } from '@mui/lab'

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
          console.log(forecastWeather.list)
          return forecastWeather.list
            .filter((forecast) => forecast.dt_txt.match(/09:00:00/))
            .map(mapWeatherData)
        }
      })
  }

  function mapWeatherData(weatherData) {
    const mapped = {
      date: weatherData.dt * 1000,
      description: weatherData.weather[0].main,
      icon: weatherData.weather[0].icon,
      temperature: Math.round(weatherData.main.temp),
      sunrise: new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      }),
      sunset: new Date(weatherData.sys.sunset * 1000).toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      }),
    }

    if (weatherData.dt) {
      mapped.dt_txt = weatherData.dt.txt
    }

    return mapped
  }

  const [value, setValue] = React.useState('1')

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Box sx={{ width: '100%', typography: 'body1' }} className="weather-area">
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList
            onChange={handleChange}
            centered
            aria-label="lab API tabs example"
          >
            <Tab label="Weather" value="1" />
            <Tab label="Daylight" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <Weather forecastData={forecastData} weatherData={weatherData} />
        </TabPanel>
        <TabPanel value="2">
          <Suntimes weatherData={weatherData} />
        </TabPanel>
      </TabContext>
    </Box>
  )
}

export default WeatherInfo
