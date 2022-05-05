import React from 'react'
import TrackButton from './TrackButton'
import Map from '../Map'
import WeatherInfo from '../weather/WeatherInfo'

function Track() {
  return (
    <section>
      <div className="page-image-container">
        <img
          src="images/placeholder-image.svg"
          alt="placeholder image of track"
        />
      </div>
      <div className="track-content-container">
        <h2 className="track-name">Hauturu Highpoint Track</h2>
        <TrackButton />
        <div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi
            fugiat praesentium quo nihil tempore commodi ab ipsum quidem
            deserunt, aliquid.
          </p>
        </div>
        <div>
          <Map />
          <WeatherInfo />
        </div>
      </div>
    </section>
  )
}

export default Track
