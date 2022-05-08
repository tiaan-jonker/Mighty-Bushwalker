import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Nav() {
  const user = useSelector((state) => state.user)
  const location = decodeURI(useLocation().pathname)

  const profilePath = (location) => {
    return location === `/user/${user.id}` ? 'act' : 'dea'
  }

  const trackPath = (location) => {
    return location === `/user/${user.id}/usertracks` ? 'act' : 'dea'
  }

  const explorePath = (location) => {
    return location === `/tracks` ? 'act' : 'dea'
  }

  return (
    <nav className="nav-bar">
      <section className="nav-icons">
        <div className="nav-icon-container">
          <NavLink to={`/user/${user.id}`}>
            <img
              src={`/icons/nav/profile-${profilePath(location)}.svg`}
              alt="my profile navigation link"
            />
          </NavLink>
        </div>
        <div className="nav-icon-container">
          <NavLink to={`user/${user.id}/usertracks`}>
            <img
              src={`/icons/nav/track-${trackPath(location)}.svg`}
              alt="my tracks navigation link"
            />
          </NavLink>
        </div>
        <div className="nav-icon-container">
          <NavLink to="/tracks">
            <img
              src={`/icons/nav/explore-${explorePath(location)}.svg`}
              alt="explore more tracks navigation link"
            />
          </NavLink>
        </div>
      </section>
    </nav>
  )
}

export default Nav
