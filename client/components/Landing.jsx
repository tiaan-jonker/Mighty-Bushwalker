import React, { useEffect, useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { getLoginFn, getRegisterFn } from '../auth0-utils'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

function Landing() {
  const user = useSelector((state) => state.user)
  const login = getLoginFn(useAuth0)
  const register = getRegisterFn(useAuth0)

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
      <IfAuthenticated>
        {user.auth0Id != '' && (
          <Navigate to={`/user/${user.auth0Id}`} id={user.auth0Id} />
        )}
      </IfAuthenticated>
      <IfNotAuthenticated>
        <div className="login-container">
          <div className="col-xs-12 col-sm-4 col-sm-offset-4 login-box">
            <div className="login-header">
              <img
                alt="The Mighty Bush Logo"
                src="https://res.cloudinary.com/dt7wm4h23/image/upload/v1651913955/Group_2_u0xxru.svg"
              />
              <h3>BUSHWALK</h3>
            </div>
            <div className="button-container">
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
      </IfNotAuthenticated>
    </>
  )
}

export default Landing
