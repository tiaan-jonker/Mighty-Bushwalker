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
      <div>
        <h2 className="user-intro">Hello {user.name},</h2>
        <h3 className="user-intro-sub">ready to level up your walking?</h3>
      </div>
      {/* Replace with UserProfileStats component */}
      <div className="stats-container">
        <div className="stat-info">
          <span className="stat-rectangle">
            <img src="/icons/trophy.svg" alt="" className="stat-icon" />
            <div className="stat-description">Hiking level</div>
            <div className="user-stat">{user.rank}</div>
          </span>
        </div>
        <div className="stat-info">
          <span className="stat-rectangle">
            <img src="/icons/hiker.svg" alt="" className="stat-icon" />
            <div className="stat-description">Hiking level</div>
            <div className="user-stat">{user.rank}</div>
          </span>
        </div>
        <div className="stat-info">
          <span className="stat-rectangle">
            <img src="/icons/compass.svg" alt="" className="stat-icon" />
            <div className="stat-description">Hiking level</div>
            <div className="user-stat">{user.rank}</div>
          </span>
        </div>
      </div>
      <div className="xp-container">
        <p>XP bar placeholder</p>
      </div>
      <div className="user-links-container">
        <div className="link-one">
          <div className="link-container">
            <div className="link-text-container">
              <div className="link-text">Explore</div>
              <img src="/icons/arrow.svg" alt="" />
            </div>
            <Link to="/tracks">
              <img
                src="/images/explore-img.png"
                alt=""
                className="user-img-one"
              />
            </Link>
          </div>
        </div>
        <div className="link-two">
          <div className="link-container">
            <div className="link-text-container">
              <div className="link-text">My tracks</div>
              <img src="/icons/arrow.svg" alt="" />
            </div>
            <Link to={`/user/${id}/usertracks`}>
              <img src="/images/mybadges-img.png" alt="" className="user-img" />
            </Link>
          </div>
        </div>
        <div className="link-three">
          <div className="link-container">
            <div className="link-text-container">
              <div className="link-text">My badges</div>
              <img src="/icons/arrow.svg" alt="" />
            </div>
            <Link to={`/user/${id}/userbadges`}>
              <img src="/images/mytracks-img.png" alt="" className="user-img" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default UserProfile
