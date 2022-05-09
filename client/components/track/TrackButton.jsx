import React from 'react'
import { useDispatch } from 'react-redux'
import { completeTrack } from '../../actions/tracks'

function TrackButton() {
  const dispatch = useDispatch()
  function handleClick() {
    dispatch(completeTrack(1, 2))
  }

  return (
    <button onClick={handleClick} className="track-btn">
      Save Bush
    </button>
  )
}

export default TrackButton
