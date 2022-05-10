import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useAuth0 } from '@auth0/auth0-react'
import { getLogoutFn } from '../../auth0-utils'
import { capitaliseFirstLetter } from '../../utils'
import UserStats from './UserStats.jsx'
import LogoutModal from './LogoutModal'

function UserProfile() {
  const user = useSelector((state) => state.user)
  const { id } = useParams()
  const logout = getLogoutFn(useAuth0)
  const Navigate = useNavigate
  const [capitalisedUserName, setCapitalisedUserName] = useState('')

  const [isOpenModal, setIsOpenModal] = useState(false)

  useEffect(() => {
    if (user.name) {
      const capsName = capitaliseFirstLetter(user.name)
      setCapitalisedUserName(capsName)
    }
  })

  function handleLogout(event) {
    event.preventDefault()
    logout()
    Navigate('/')
  }

  function handleClick() {
    setIsOpenModal(true)
  }

  return (
    <div>
      <section className="page-container container-bg-green">
        <img
          src="/icons/logout.svg"
          alt=""
          onClick={handleClick}
          className="logout-btn"
        />
        {isOpenModal && (
          <LogoutModal
            handleLogout={handleLogout}
            setIsOpenModal={setIsOpenModal}
          />
        )}
        <div>
          <h2 className="user-intro">Hello {capitalisedUserName},</h2>
          <h3 className="user-intro-sub">Ready to level up your walking?</h3>
        </div>
        <UserStats user={user} />
        <div className="user-links-container">
          <div className="explore-area">
            <Link to="/tracks">
              <div className="link-text-container">
                <div className="link-text">Explore</div>
                <img src="/icons/arrow.svg" alt="" />
              </div>
              <img
                src="/images/explore-img.png"
                alt="link to explore new tracks"
                className="explore-area-img"
              />
            </Link>
          </div>
          <div className="tracks-area">
            <Link to={`/user/${id}/usertracks`}>
              <div className="link-text-container">
                <div className="link-text">My tracks</div>
                <img src="/icons/arrow.svg" alt="" />
              </div>
              <img
                src="/images/mytracks-img.png"
                alt="link to all my tracks"
                className="tracks-area-img"
              />
            </Link>
          </div>
          <div className="badges-area">
            <Link to={`/user/${id}/userbadges`}>
              <div className="link-text-container">
                <div className="link-text">My badges</div>
                <img src="/icons/arrow.svg" alt="" />
              </div>
              <img
                src="/images/mybadges-img.png"
                alt="link to all my badges and achievements"
                className="badges-area-img"
              />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default UserProfile
