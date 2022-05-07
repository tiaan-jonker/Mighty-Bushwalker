import React, { useState, useEffect } from 'react'
import { getAllTracks } from './tracksHelper'

import TrackItem from './TrackItem'
import AllTracksMap from '../map/AllTracksMap'

function Track() {
  const [allTracks, setAllTracks] = useState([])

  useEffect(() => {
    getAllTracks().then((tracks) => {
      setAllTracks(tracks)
      console.log(tracks)
      return null
    })
  }, [])

  const randomNumGenerator = () => {
    return Math.floor(Math.random() * 14)
  }

  return (
    <section className="page-container">
      <h2 className="tracks-intro">Explore</h2>
      <p className="tracks-sub">All trails available to hike</p>
      <AllTracksMap />
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
