import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { saveTrack } from '../../actions/tracks'

function TrackButton() {
  const { id } = useParams() // track ID
  const user = useSelector((state) => state.user)
  const dispatch = useDispatch()
  function handleClick() {
    dispatch(saveTrack(user.id, id))
  }

  return (
    <button onClick={handleClick} className="track-btn">
      Save Bush
    </button>
  )
}

export default TrackButton
