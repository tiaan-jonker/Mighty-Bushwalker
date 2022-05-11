import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { checkIfDateIsNotToday } from './trackHelper'
import TrackButtonSave from './TrackButtonSave'
import TrackButtonComplete from './TrackButtonComplete'
import TrackButtonCompleted from './TrackButtonCompleted'
import TrackMap from '../map/TrackMap'
import WeatherInfo from '../weather/WeatherInfo'
import BadgesModal from './BadgesModal'
import HikingModal from './HikingModal'
import HikingUsers from './HikingUsers'

function Track() {
  const { id } = useParams()
  const tracks = useSelector((state) => state.tracks)
  const badgeModal = useSelector((state) => state.badgeModal.display)
  const badgeModalIcons = useSelector((state) => state.badgeModal.badges)
  const [track, setTrack] = useState([])
  const [hikingCurrentTrack, setHikingCurrentTrack] = useState(0)
  const [outHiking, setOutHiking] = useState(false)
  const [isHikingOpenModal, setIsHikingOpenModal] = useState(false)
  const [voiceover, setVoiceover] = useState(false)

  useEffect(() => {
    const trackData = tracks.find((track) => track.id === Number(id))
    const isHiking = tracks.filter((track) => track.hiking).length
    setOutHiking(isHiking)
    setHikingCurrentTrack(trackData.hiking)
    setTrack(trackData)
  }, [tracks])

  function handleClick() {
    setIsHikingOpenModal(true)
  }

  function handlePlay() {
    setVoiceover((prevState) => !prevState)
  }

  return (
    <section className="container-bg-blue">
      <div className="page-image-container ">
        <img src="/images/bg/bg-1.webp" alt="placeholder image of track" />
      </div>
      <img
        src="/icons/hiking-options.svg"
        alt="Options"
        onClick={handleClick}
        className="logout-btn"
      />
      <div className="track-content-container">
        <h2 className="track-name">{track.name}</h2>

        {badgeModal && <BadgesModal badgeModalIcons={badgeModalIcons} />}
        {isHikingOpenModal && (
          <HikingModal
            setIsOpenModal={setIsHikingOpenModal}
            outHiking={outHiking}
            hikingCurrentTrack={hikingCurrentTrack}
            cantCompleteAgain={
              track.completed === 1 &&
              !checkIfDateIsNotToday(track.lastCompletion)
            }
          />
        )}
        <div className="track-buttons-container">
          {track.completed === 1 && (
            <TrackButtonCompleted
              canCompleteAgain={checkIfDateIsNotToday(track.lastCompletion)}
            />
          )}
          {track.saved === 1 && track.completed === 0 && (
            <TrackButtonComplete />
          )}
          {track.saved === 0 && track.completed === 0 && <TrackButtonSave />}
          <img
            src={`/icons/${voiceover ? 'stop' : 'play'}.svg`}
            alt=""
            className="play-btn"
            onClick={handlePlay}
          />
        </div>
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
          {badgeModal ? '' : <TrackMap track={track} />}

          <WeatherInfo />
          <div style={{ minHeight: '200px', marginBottom: '60px' }}>
            <HikingUsers />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Track
