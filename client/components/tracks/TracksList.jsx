import React, { useState, useEffect } from 'react'
import { calculateDistanceBetweenPoints, getAllTracks } from './tracksHelper'

import TrackItem from './TrackItem'
import AllTracksMap from '../map/AllTracksMap'

function Track() {
  const [allTracks, setAllTracks] = useState([])
  const [coords, setCoords] = useState([])

  // get location
  // then add new location
  //

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

            return { ...track, distanceAway }
          })
          setAllTracks(updatedTracks)
          return null
        })
      })
      .catch((err) => console.log(err))
  }, [])

  const randomNumGenerator = () => {
    return Math.floor(Math.random() * 14)
  }

  return (
    <section className="page-container">
      <h2 className="tracks-intro">Explore</h2>
      <p className="tracks-sub">All trails available to hike</p>
      <AllTracksMap tracks={allTracks} />
      {allTracks.map((trackData) => (
        <ul key={trackData.id} className="track-list">
          <div className="track-link-item">
            <TrackItem
              trackData={trackData}
              const
              randomNum={randomNumGenerator}
            />
          </div>
        </ul>
      ))}
    </section>
  )
}

export default Track
