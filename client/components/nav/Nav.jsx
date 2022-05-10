import React from 'react'
import { Link, useLocation } from 'react-router-dom'
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
      <Link to={`/user/${user.id}`} className="nav-icon">
        <img
          src={`/icons/nav/profile-${profilePath(location)}.svg`}
          alt="my profile navigation link"
        />
      </Link>
      <Link to={`user/${user.id}/usertracks`} className="nav-icon">
        <img
          src={`/icons/nav/track-${trackPath(location)}.svg`}
          alt="my tracks navigation link"
        />
      </Link>
      <Link to="/tracks" className="nav-icon">
        <img
          src={`/icons/nav/explore-${explorePath(location)}.svg`}
          alt="explore more tracks navigation link"
        />
      </Link>
    </nav>
  )
}

export default Nav
