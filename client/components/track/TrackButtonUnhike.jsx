import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { unhikeTrack } from '../../actions/tracks'

function TrackButtonUnhike() {
  const { id } = useParams() // track ID
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user)

  function handleClick() {
    dispatch(unhikeTrack(Number(id), user.id))
  }

  return (
    <button onClick={handleClick} className="track-btn">
      No More Hikee
    </button>
  )
}

export default TrackButtonUnhike
