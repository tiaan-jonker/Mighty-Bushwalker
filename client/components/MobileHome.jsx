import React from 'react'
import MobileTopBarSim from './MobileTopBarSim'

function MobileHome({ handleClick, navigate, handleNavigate }) {
  return (
    <div>
      {navigate ? (
        <>
          <div className="mighty-bush-container">
            <div>
              <h1 className="mighty-bush-text">
                GO TO <br></br> THE MIGHTY BUSH
              </h1>
            </div>
            <div className="mighty-authors">
              <h3>Made by Clementine, Finn, Jesse, Tai and Tiaan</h3>
            </div>
          </div>
        </>
      ) : (
        <>
          <MobileTopBarSim />
          <div className="app-icons-container">
            <img
              src="/icons/sim/mighty-bush.svg"
              alt=""
              className="app-icon"
              onClick={handleClick}
            />
            <img src="/icons/sim/eda.svg" alt="" className="app-icon" />
            <img src="/icons/sim/messages.svg" alt="" className="app-icon" />
            <img
              src="/icons/sim/get-bush.svg"
              alt=""
              className="app-icon"
              onClick={handleNavigate}
            />
          </div>
          <img src="/icons/sim/home-bg.svg" alt="" className="mobile-bg" />
        </>
      )}
    </div>
  )
}

export default MobileHome
