import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'

function Nav({ placeholderUser }) {
  const location = decodeURI(useLocation().pathname)

  const profilePath = (location) => {
    return location === `/user/${placeholderUser.id}` ? 'act' : 'dea'
  }

  const trackPath = (location) => {
    return location === `/user/${placeholderUser.id}/usertracks` ? 'act' : 'dea'
  }

  const explorePath = (location) => {
    return location === `/tracks` ? 'act' : 'dea'
  }

  return (
    <nav className="nav-bar">
      <section className="nav-icons">
        <div className="nav-icon-container">
          <NavLink to={`/user/${placeholderUser.id}`}>
            <img
              src={`/icons/nav/profile-${profilePath(location)}.svg`}
              alt=""
            />
          </NavLink>
        </div>
        <div className="nav-icon-container">
          <NavLink to={`user/${placeholderUser.id}/usertracks`}>
            <img src={`/icons/nav/track-${trackPath(location)}.svg`} alt="" />
          </NavLink>
        </div>
        <div className="nav-icon-container">
          <NavLink to="/tracks">
            <img
              src={`/icons/nav/explore-${explorePath(location)}.svg`}
              alt=""
            />
          </NavLink>
        </div>
      </section>
    </nav>
  )
}

export default Nav
