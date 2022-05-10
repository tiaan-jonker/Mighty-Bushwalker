import React, { useState, useEffect } from 'react'
import { calculateDistanceBetweenPoints } from './tracksHelper'
import TrackItem from './TrackItem'
import AllTracksMap from '../map/AllTracksMap'
import TrackFilterModal from './TrackFilterModal'
import { randomNumGenForImage } from '../../utils'
import { useSelector } from 'react-redux'
import WaitCircular from '../WaitIndicator/WaitCircular'

function Track() {
  const tracks = useSelector((state) => state.tracks)
  const [allTracks, setAllTracks] = useState(tracks)

  const [loading, setLoading] = useState(false)

  // FILTER STATES
  const [filteredTracks, setFilteredTracks] = useState([])
  const [difficultyFilter, setDifficultyFilter] = useState([
    'Easy',
    'Intermediate',
    'Advanced',
  ])
  const [lengthFilter, setLengthFilter] = useState(['Short', 'Medium', 'Long'])

  // MODAL AND SHOW BUTTON STATES
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [showMore, setShowMore] = useState(2)
  const [showButtonText, setShowButtonText] = useState(false)

  // MODAL AND SHOW BUTTON LOGIC
  const handleClick = () => {
    setShowMore((prevState) => (prevState === 2 ? filteredTracks.length : 2))
    setShowButtonText((prevState) => !prevState)
  }

  const handleModal = () => {
    setIsOpenModal(true)
  }

  // GET TRACKS AND GEOLOCATION
  useEffect(() => {
    setLoading(true)
    navigator.geolocation.getCurrentPosition(function (position) {
      const coords = position.coords
      const updatedTracks = tracks.map((track) => {
        const distanceAway = calculateDistanceBetweenPoints(
          coords.latitude,
          coords.longitude,
          track.lat,
          track.lon
        ).toFixed(1)

        let lengthCategory = 'Long'
        if (track.length < 5) {
          lengthCategory = 'Short'
        } else if (track.length < 12) {
          lengthCategory = 'Medium'
        }

        return { ...track, distanceAway, lengthCategory }
      })

      const unsavedTracks = updatedTracks.filter(
        (track) => !track.completed && !track.saved
      )

      unsavedTracks.sort((a, b) => {
        return a.distanceAway - b.distanceAway
      })
      setAllTracks(unsavedTracks) //
      setFilteredTracks(unsavedTracks) // creates display version of tracks which we filter the values out of
      setLoading(false)
    })
  }, [tracks])

  // FILTER TRACKS BY DIFFICULTY
  useEffect(() => {
    const newFilteredTracks = allTracks.filter((track) =>
      difficultyFilter.includes(track.difficulty)
    )
    setFilteredTracks(newFilteredTracks)
  }, [difficultyFilter])

  // FILTER TRACKS BY LENGTH
  useEffect(() => {
    const newFilteredTracks = allTracks.filter((track) =>
      lengthFilter.includes(track.lengthCategory)
    )
    setFilteredTracks(newFilteredTracks)
  }, [lengthFilter])

  return (
    <section className="page-container container-bg-blue">
      {isOpenModal && (
        <TrackFilterModal
          setIsOpenModal={setIsOpenModal}
          difficultyFilterDetails={{ setDifficultyFilter, difficultyFilter }}
          lengthFilterDetails={{ setLengthFilter, lengthFilter }}
        />
      )}

      <div className={isOpenModal ? 'modal-display-none' : ''}>
        <h2 className="tracks-intro">Explore</h2>
        <p className="tracks-sub">All trails available to hike</p>
        {loading ? (
          <WaitCircular />
        ) : (
          <>
            <AllTracksMap tracks={filteredTracks} />
            <button onClick={handleModal} className="modal-btn">
              <div className="modal-btn-container">
                <img src="/icons/filter.svg" alt="" className="filter-icon" />
                <p>Filters</p>
              </div>
            </button>

            {filteredTracks.slice(0, showMore).map((trackData) => (
              <ul key={trackData.id} className="track-list">
                <div className="track-link-item">
                  <TrackItem
                    trackData={trackData}
                    randomNum={randomNumGenForImage}
                  />
                </div>
              </ul>
            ))}
            <button
              onClick={handleClick}
              className="modal-btn"
              style={{ marginBottom: '50px' }}
            >
              <div className="modal-btn-show-container">
                {showButtonText ? 'Show less' : 'Show more'}
              </div>
            </button>
          </>
        )}
      </div>
    </section>
  )
}

export default Track
