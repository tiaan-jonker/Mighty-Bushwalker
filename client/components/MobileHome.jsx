import React from 'react'

function MobileHome({ handleClick }) {
  return (
    <>
      <div className="app-icons-container">
        <img
          src="/icons/sim/mighty-bush.svg"
          alt=""
          className="app-icon"
          onClick={handleClick}
        />
        <img src="/icons/sim/eda.svg" alt="" className="app-icon" />
        <img src="/icons/sim/messages.svg" alt="" className="app-icon" />
        <img src="/icons/sim/safari.svg" alt="" className="app-icon" />
      </div>
      <img src="/icons/sim/home-bg.svg" alt="" className="mobile-bg" />
    </>
  )
}

export default MobileHome
