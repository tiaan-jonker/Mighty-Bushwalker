import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { saveTrack } from '../../actions/tracks'

function TrackButtonSave() {
  const { id } = useParams() // track ID
  const user = useSelector((state) => state.user)
  const dispatch = useDispatch()

  function handleClick() {
    dispatch(saveTrack(Number(id), user.id))
  }

  return (
    <button onClick={handleClick} className="track-btn">
      Save Track
    </button>
  )
}

export default TrackButtonSave
