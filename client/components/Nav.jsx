import React from 'react'
// import { useAuth0 } from '@auth0/auth0-react'
// import { getLoginFn, getLogoutFn, getRegisterFn } from '../auth0-utils'
// import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'
// import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

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

  return (
    <nav className="nav-bar">
      <section className="nav-icons">
        <div>
          <Link to="/user/1">
            <img src="icons/mountain-nav.svg" alt="" />
          </Link>
        </div>
        <div>
          <Link to="/track">
            <img src="icons/mountain-nav.svg" alt="" />
          </Link>
        </div>
        <div>
          <Link to="/">
            <img src="icons/mountain-nav.svg" alt="" />
          </Link>
        </div>
        <div>
          <Link to="/">
            <img src="icons/mountain-nav.svg" alt="" />
          </Link>
        </div>
      </section>
    </nav>
  )
}

export default Nav
