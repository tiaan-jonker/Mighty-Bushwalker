import React, { useEffect, useState } from 'react'
// import { useAuth0 } from '@auth0/auth0-react'
// import { getLoginFn, getLogoutFn, getRegisterFn } from '../auth0-utils'
// import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'
// import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

function Nav() {
  // const user = useSelector((state) => state.user)
  // const login = getLoginFn(useAuth0)
  // const logout = getLogoutFn(useAuth0)
  // const register = getRegisterFn(useAuth0)

  // function handleLogin(event) {
  //   event.preventDefault()
  //   login()
  // }

  // function handleLogoff(event) {
  //   event.preventDefault()
  //   logout()
  // }

  // function handleRegister(event) {
  //   event.preventDefault()
  //   register()
  // }

  const [navSelected, setNavSelected] = useState('profile')

  // profile, tracks, explore

  const profileClick = () => {
    setNavSelected('profile')
  }

  const tracksClick = () => {
    setNavSelected('tracks')
  }

  const exploreClick = () => {
    setNavSelected('explore')
  }

  const setProfileColor = () => {
    return navSelected === 'profile' ? '#eee' : '#000'
  }

  const setTracksColor = () => {
    return navSelected === 'tracks' ? '#eee' : '#000'
  }

  const setExploreColor = () => {
    return navSelected === 'explore' ? '#eee' : '#000'
  }

  return (
    <nav className="nav-bar">
      <section className="nav-icons">
        <div className="nav-icon-container">
          <NavLink to="/user/1" onClick={profileClick}>
            <svg
              width="40"
              height="40"
              viewBox="0 0 58 58"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M29 4.83334C15.66 4.83334 4.83331 15.66 4.83331 29C4.83331 42.34 15.66 53.1667 29 53.1667C42.34 53.1667 53.1666 42.34 53.1666 29C53.1666 15.66 42.34 4.83334 29 4.83334ZM29 12.0833C33.0116 12.0833 36.25 15.3217 36.25 19.3333C36.25 23.345 33.0116 26.5833 29 26.5833C24.9883 26.5833 21.75 23.345 21.75 19.3333C21.75 15.3217 24.9883 12.0833 29 12.0833ZM29 46.4C22.9583 46.4 17.6175 43.3067 14.5 38.6183C14.5725 33.8092 24.1666 31.175 29 31.175C33.8091 31.175 43.4275 33.8092 43.5 38.6183C40.3825 43.3067 35.0416 46.4 29 46.4Z"
                fill={setProfileColor()}
              />
            </svg>
            <p className="nav-text" style={{ color: setProfileColor() }}>
              Profile
            </p>
          </NavLink>
        </div>
        <div className="nav-icon-container">
          <NavLink to="user/1/usertracks" onClick={tracksClick}>
            <svg
              width="40"
              height="40"
              viewBox="0 0 52 43"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M26 0C24.8 0 24.4 0.781819 23.6 1.56364L0.4 38.7C8.9407e-08 39.0909 0 39.8727 0 40.2636C0 42.2182 1.6 43 2.8 43H49.2C50.8 43 52 42.2182 52 40.2636C52 39.4818 52 39.4818 51.6 38.7L28.8 1.56364C28 0.781819 27.2 0 26 0ZM26 5.86364L39.2 27.3636H36L30 21.5L26 27.3636L22 21.5L16 27.3636H12.4L26 5.86364Z"
                fill={setTracksColor()}
              />
            </svg>
            <p className="nav-text" style={{ color: setTracksColor() }}>
              My tracks
            </p>
          </NavLink>
        </div>
        <div className="nav-icon-container">
          <NavLink to="/tracks" onClick={exploreClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="40"
              width="40"
              viewBox="0 0 24 24"
              fill={setExploreColor()}
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
            </svg>

            <p className="nav-text" style={{ color: setExploreColor() }}>
              Explore
            </p>
          </NavLink>
        </div>
      </section>
    </nav>
  )
}

export default Nav
