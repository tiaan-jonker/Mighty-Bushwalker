import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { completeTrack } from '../../actions/tracks'

function TrackButtonCompleted({ canCompleteAgain }) {
  const { id } = useParams() // track ID
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user)
  const { points } = useSelector((state) =>
    state.tracks.find((track) => track.id === Number(id))
  )

  function handleClick() {
    dispatch(completeTrack(Number(id), user.id, points))
  }

  return canCompleteAgain ? (
    <button onClick={handleClick} className="track-btn">
      Mark Complete Again
    </button>
  ) : (
    <button className="track-btn">Completed Today</button>
  )
}

export default TrackButtonCompleted
