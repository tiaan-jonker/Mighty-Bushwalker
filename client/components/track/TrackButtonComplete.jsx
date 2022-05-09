import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { completeTrack } from '../../actions/tracks'

function TrackButtonComplete() {
  const { id } = useParams() // track ID
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user)
  const tracks = useSelector((state) => state.tracks)

  const { points } = tracks.find((track) => track.id === Number(id))

  function handleClick() {
    dispatch(completeTrack(Number(id), user.id, points))
  }

  return (
    <button onClick={handleClick} className="track-btn">
      Mark Complete
    </button>
  )
}

export default TrackButtonComplete
