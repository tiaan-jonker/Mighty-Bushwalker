import React, { useEffect, useState } from 'react'
import TrackButton from './TrackButton'
import TrackMap from '../map/TrackMap'
import WeatherInfo from '../weather/WeatherInfo'
import { useParams } from 'react-router-dom'
import { getTrack } from './trackHelper'
import TrackInfoIcons from './TrackInfoIcons'
import TrackButtonCompleted from './TrackButtonCompleted'
import { useSelector } from 'react-redux'

function Track() {
  const tracks = useSelector((state) => state.tracks)

  const { id } = useParams()
  const [track, setTrack] = useState(
    tracks.find((track) => track.id === Number(id))
  )
  useEffect(() => {
    const trackData = tracks.find((track) => track.id === Number(id))
    setTrack(trackData)
  }, [tracks])

  console.log(track)

  return (
    <section>
      <div className="page-image-container">
        <img src="/images/bg/bg-1.webp" alt="placeholder image of track" />
      </div>
      <div className="track-content-container">
        <h2 className="track-name">{track.name}</h2>
        <div>
          {track.completed ? <TrackButton /> : <TrackButtonCompleted />}
        </div>
        <TrackInfoIcons track={track} />
        <div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi
            fugiat praesentium quo nihil tempore commodi ab ipsum quidem
            deserunt, aliquid.
          </p>
        </div>
        <div>
          <TrackMap track={track} />
          <WeatherInfo />
        </div>
      </div>
    </section>
  )
}

export default Track
