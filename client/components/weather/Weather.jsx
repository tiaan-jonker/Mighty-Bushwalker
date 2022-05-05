import React from 'react'
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

function Weather({ weatherData }) {
  return (
    <div>
      <p>Today</p>
      <FontAwesomeIcon icon={faCloud} />
      <p>{weatherData.description}</p>
    </div>
  )
}

export default Weather
