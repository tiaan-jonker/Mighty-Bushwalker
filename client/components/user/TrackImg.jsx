import React from 'react'

function TrackImg({ randomNum }) {
  return (
    <div>
      <img
        src={`/images/bg/bg-${randomNum()}.webp`}
        alt=""
        className="track-banner-img"
      />
    </div>
  )
}

export default TrackImg
