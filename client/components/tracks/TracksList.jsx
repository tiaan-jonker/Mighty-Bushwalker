import React, { useState, useEffect } from 'react'
import { getAllTracks } from './tracksHelper'

import TrackItem from './TrackItem'

function Track() {
  const [allTracks, setAllTracks] = useState([])

  useEffect(() => {
    getAllTracks().then((tracks) => {
      setAllTracks(tracks)
      console.log(tracks)
      return null
    })
  }, [])

  return (
    <section className="page-container">
      {allTracks.map((trackData) => (
        <ul key={trackData.id} className="track-list">
          <div className="track-link-item">
            <TrackItem trackData={trackData} />
          </div>
        </ul>
      ))}
    </section>
  )
}

export default Track
