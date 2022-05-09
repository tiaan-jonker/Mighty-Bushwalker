import React, { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useAuth0 } from '@auth0/auth0-react'
import { getLogoutFn } from '../../auth0-utils'
import UserStats from './UserStats.jsx'
import LogoutModal from './LogoutModal'

function UserProfile() {
  const user = useSelector((state) => state.user)
  const { id } = useParams()
  const logout = getLogoutFn(useAuth0)
  const Navigate = useNavigate

  const [isOpenModal, setIsOpenModal] = useState(false)

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
          <h2 className="user-intro">Hello {user.name},</h2>
          <h3 className="user-intro-sub">Ready to level up your walking?</h3>
        </div>
        <UserStats user={user} />
        <div className="user-links-container">
          <div className="link-one">
            <div className="link-container-one">
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
                <img
                  src="/images/mybadges-img.png"
                  alt=""
                  className="user-img"
                />
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
                <img
                  src="/images/mytracks-img.png"
                  alt=""
                  className="user-img"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default UserProfile
