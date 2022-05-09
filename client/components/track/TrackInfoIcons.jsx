import React from 'react'

function TrackInfoIcons(props) {
  const { track } = props
  return (
    <div>
      {track.length}km {track.points}pts
    </div>
  )
}

export default TrackInfoIcons
