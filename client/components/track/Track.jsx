import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { checkIfDateIsNotToday } from './trackHelper'
import TrackButtonSave from './TrackButtonSave'
import TrackButtonComplete from './TrackButtonComplete'
import TrackButtonCompleted from './TrackButtonCompleted'
import TrackMap from '../map/TrackMap'
import WeatherInfo from '../weather/WeatherInfo'
import BadgesModal from './BadgesModal'

function Track() {
  // const dispatch = useDispatch()
  const { id } = useParams()
  const tracks = useSelector((state) => state.tracks)
  const badgeModal = useSelector((state) => state.badgeModal.display)
  const [track, setTrack] = useState([])

  useEffect(() => {
    const trackData = tracks.find((track) => track.id === Number(id))
    setTrack(trackData)
  }, [tracks])

  return (
    <section>
      <div className="page-image-container">
        <img src="/images/bg/bg-1.webp" alt="placeholder image of track" />
      </div>
      <div className="track-content-container">
        <h2 className="track-name">{track.name}</h2>

        {badgeModal && <BadgesModal />}

        {track.completed === 1 && (
          <TrackButtonCompleted
            canCompleteAgain={checkIfDateIsNotToday(track.lastCompletion)}
          />
        )}
        {track.saved === 1 && track.completed === 0 && <TrackButtonComplete />}
        {track.saved === 0 && track.completed === 0 && <TrackButtonSave />}

        <div>
          <div className="track-info-line"></div>
          <div className="track-info-container">
            <div>
              <p className="track-info-heading">Length</p>
              <p>{track.length}km</p>
            </div>
            <div>
              <p className="track-info-heading">Est.</p>
              <p>{track.hours}hrs</p>
            </div>
            <div>
              <p className="track-info-heading">XP Potential</p>
              <div className="points-info">{track.points} XP</div>
            </div>
          </div>
          <p>
            {track.description ? track.description : 'No description available'}
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
