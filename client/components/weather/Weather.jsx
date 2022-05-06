import React, { useState } from 'react'

function Weather({ weatherData }) {
  const { description, currentTemperature } = weatherData

  return (
    <div>
      <p>Today</p>
      <p>{description}</p>
    </div>
  )
}

export default Weather
