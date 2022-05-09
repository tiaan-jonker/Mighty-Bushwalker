import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { completeTrack } from '../../actions/tracks'

function TrackButtonCompleted() {
  // const { id } = useParams() // track ID
  // const dispatch = useDispatch()
  // const user = useSelector((state) => state.user)
  // const { points } = useSelector((state) =>
  //   state.tracks.find((track) => track.id === Number(id))
  // )

  // function handleClick() {
  //   dispatch(completeTrack(user.id, id, points))
  // }

  return <button className="track-btn">Completed</button>
}

export default TrackButtonCompleted
