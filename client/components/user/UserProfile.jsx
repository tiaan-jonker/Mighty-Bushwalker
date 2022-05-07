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
      <div className="">
        <h2 className="user-intro">Hello {user.name},</h2>
        <h3 className="user-intro-sub">ready to level up your walking?</h3>
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
            <Link to="/usertracks">
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
