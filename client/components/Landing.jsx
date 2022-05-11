import React, { useState, useEffect } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { getLoginFn, getRegisterFn } from '../auth0-utils'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import MobileHome from './MobileHome'
import SplashPage from './SplashPage'
import { playTheme } from './musichelper/musichelper'

function Landing() {
  const user = useSelector((state) => state.user)
  const login = getLoginFn(useAuth0)
  const register = getRegisterFn(useAuth0)
  const [home, setHome] = useState(false)
  const [animation, setAnimation] = useState(false)
  const [navigate, setNavigate] = useState(false)

  function handleClick() {
    // const [song, playSong] = useState(playTheme())

    // useEffect(() => {
    //   return null
    // }, [playTheme])
    playTheme(1)
    setAnimation(true)
    setTimeout(() => {
      setAnimation(false)
      setHome(true)
    }, 3300)
  }

  function handleNavigate() {
    setNavigate(true)
  }

  function handleLogin(event) {
    event.preventDefault()
    login()
  }

  function handleRegister(event) {
    event.preventDefault()
    register()
  }

  return (
    <>
      {user.id != 0 && (
        <IfAuthenticated>
          <Navigate to={`/user/${user.id}`} />
        </IfAuthenticated>
      )}

      <IfNotAuthenticated>
        {home ? (
          <>
            <div className="register-container">
              <div className="register-box">
                <div className="sign-in">
                  <img src="/icons/BushWalkLogo.svg" />
                  <h1 className="register-text register-heading">
                    THE MIGHTY BUSH
                  </h1>
                </div>
                <div className="form-group">
                  <button
                    onClick={handleLogin}
                    type="submit"
                    id="btn-login"
                    className="btn btn-primary btn-block rounded-btn"
                  >
                    Log In
                  </button>
                  <button
                    onClick={handleRegister}
                    type="button"
                    id="btn-signup"
                    className="btn btn-default btn-block"
                  >
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="mobile-home">
            {animation ? (
              <SplashPage />
            ) : (
              <MobileHome
                handleClick={handleClick}
                handleNavigate={handleNavigate}
                navigate={navigate}
              />
            )}
          </div>
        )}
      </IfNotAuthenticated>
    </>
  )
}

export default Landing
