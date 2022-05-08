import React, { useState, useEffect } from 'react'
import { calculateDistanceBetweenPoints, getAllTracks } from './tracksHelper'
import { useSelector, useDispatch } from 'react-redux'
import TrackItem from './TrackItem'
import AllTracksMap from '../map/AllTracksMap'
import TrackFilters from './TrackFilters'
import TrackFilterModal from './TrackFilterModal'
import { fetchMapAndProductData } from '../../actions/tracks'
import { randomNumGenForImage } from '../../utils'

function Track() {
  const [allTracks, setAllTracks] = useState([])
  const [filteredTracks, setFilteredTracks] = useState([])
  const [difficultyFilter, setDifficultyFilter] = useState([
    'Easy',
    'Intermediate',
    'Advanced',
  ])
  const [lengthFilter, setLengthFilter] = useState(['Short', 'Medium', 'Long'])
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [showMore, setShowMore] = useState(2)

  const handleClick = () => {
    setShowMore(filteredTracks.length)
  }

  const handleModal = () => {
    setIsOpenModal(true)
  }

  useEffect(() => {
    getAllTracks()
      .then((tracks) => {
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

          updatedTracks.sort((a, b) => {
            return a.distanceAway - b.distanceAway
          })

          setAllTracks(updatedTracks) //
          setFilteredTracks(updatedTracks) // creates display version of tracks which we filter the values out of
          return null
        })
      })
      .catch((err) => console.log(err))
  }, [])

  // Filter Tracks by Difficulty
  useEffect(() => {
    const newFilteredTracks = allTracks.filter((track) =>
      difficultyFilter.includes(track.difficulty)
    )
    setFilteredTracks(newFilteredTracks)
  }, [difficultyFilter])

  function updateDifficultyFilter(newValue) {
    setDifficultyFilter(newValue)
  }

  // Filter Tracks by Length
  useEffect(() => {
    const newFilteredTracks = allTracks.filter((track) =>
      lengthFilter.includes(track.lengthCategory)
    )
    setFilteredTracks(newFilteredTracks)
  }, [lengthFilter])

  function updateLengthFilter(newValue) {
    setLengthFilter(newValue)
  }

  return (
    <section className="page-container">
      {isOpenModal && <TrackFilterModal setIsOpenModal={setIsOpenModal} />}
      <div className={isOpenModal ? 'modal-display-none' : ''}>
        <h2 className="tracks-intro">Explore</h2>
        <p className="tracks-sub">All trails available to hike</p>
        <AllTracksMap tracks={filteredTracks} />
        <button onClick={handleModal}>Open Modal</button>
        <TrackFilters
          difficultyFilterDetails={{ updateDifficultyFilter, difficultyFilter }}
          lengthFilterDetails={{ updateLengthFilter, lengthFilter }}
        />
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
        <button onClick={handleClick} style={{ marginBottom: '50px' }}>
          Show more
        </button>
      </div>
    </section>
  )
}

export default Track
