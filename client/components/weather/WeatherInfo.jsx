import React, { useState, useEffect } from 'react'

function WeatherInfo() {
  const [data, setData] = useState([])

  const lat = '-36.212791'
  const lon = '175.402013'

  const { weather, main, wind, sys } = data

  useEffect(() => {
    const fetchWeatherData = async() => {
      await fetch(url)
        .then((res) => res.json())
        .then((result) => {
          setData(result)
        })
    }
    fetchWeatherData()
  }, [])

  console.log(sys)

  return (
    <div>
      <div>
        {/* <p>{weather[0].description}</p> */}
      </div>
    </div>
  )
}

export default WeatherInfo