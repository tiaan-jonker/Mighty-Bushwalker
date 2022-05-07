import React from 'react'

function TrackInfoIcons(props) {
  const { track } = props
  return <div>{track.length}km</div>
}

export default TrackInfoIcons
