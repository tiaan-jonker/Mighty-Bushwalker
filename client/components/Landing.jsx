import React from 'react'
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
      {user.id != 0 && (
        <IfAuthenticated>
          <Navigate to={`/user/${user.id}`} />
        </IfAuthenticated>
      )}

      <IfNotAuthenticated>
        <div className="register-container">
          <div className="register-box">
            <div className="login-header">
              <img src="/icons/BushWalkLogo.svg" />
              <h1 className="register-text register-heading">BUSHWALK</h1>
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
      </IfNotAuthenticated>
    </>
  )
}

export default Landing
