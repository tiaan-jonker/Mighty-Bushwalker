import React, { useEffect, useState } from 'react'
import TrackButton from './TrackButton'
import Map from './Map'
import WeatherInfo from '../weather/WeatherInfo'
import { useParams } from 'react-router-dom'
import { getTrack } from './trackHelper'
import TrackInfoIcons from './TrackInfoIcons'

function Track() {
  const [track, setTrack] = useState([])
  const { id } = useParams()
  useEffect(() => {
    getTrack(id)
      .then((user) => {
        return setTrack(user)
      })
      .catch((err) => console.log(err))
  }, [id])

  return (
    <section>
      <div className="page-image-container">
        <img src="/images/bg/bg-1.webp" alt="placeholder image of track" />
      </div>
      <div className="track-content-container">
        <h2 className="track-name">{track.name}</h2>
        <TrackButton />
        <TrackInfoIcons track={track} />
        <div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi
            fugiat praesentium quo nihil tempore commodi ab ipsum quidem
            deserunt, aliquid.
          </p>
        </div>
        <div>
          <Map track={track} />
          <WeatherInfo />
        </div>
      </div>
    </section>
  )
}

export default Track
