import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getUser } from './userHelper'

function UserProfile() {
  const [user, setUser] = useState([])
  const { id } = useParams()

  useEffect(() => {
    getUser(id)
      .then((user) => {
        return setUser(user)
      })
      .catch((err) => console.log(err))
  }, [id])

  return (
    <section className="page-container">
      <h1 className="app-name">Bushwalk</h1>
      <div>
        <h2 className="user-intro">
          Hello {user.name}, ready to level up your walking?
        </h2>
      </div>
      {/* Replace with UserProfileStats component */}
      <div className="stats-container">
        <div className="stat-info">
          <span className="circle">Rank</span>
          <p>{user.rank}</p>
        </div>
        <div className="stat-info">
          <span className="circle">XP</span>
          <p>{user.xp} XP</p>
        </div>
        <div className="stat-info">
          <span className="circle"></span>
          <p>Level 50</p>
        </div>
        <div className="stat-info">
          <span className="circle"></span>
          <p>Level 50</p>
        </div>
      </div>
      <div>
        <div className="user-links-container">
          <Link to={`/user/${id}/usertracks`}>
            <div className="user-link">
              <p>My tracks</p>
              <img src="icons/arrow.svg" alt="" />
            </div>
          </Link>
          <Link to="/">
            <div className="user-link">
              <p>Explore other tracks</p>
              <img src="icons/arrow.svg" alt="" />
            </div>
          </Link>
          <Link to={`/user/${id}/userbadges`}>
            <div className="user-link">
              <p>Badges earned</p>
              <img src="icons/arrow.svg" alt="" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default UserProfile
