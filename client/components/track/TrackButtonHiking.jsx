import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { hikeTrack } from '../../actions/tracks'

function TrackButtonHiking() {
  const { id } = useParams() // track ID
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user)

  function handleClick() {
    dispatch(hikeTrack(Number(id), user.id))
  }

  return (
    <button onClick={handleClick} className="track-btn">
      Im Hiking
    </button>
  )
}

export default TrackButtonHiking
