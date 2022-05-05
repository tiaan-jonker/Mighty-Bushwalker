import React from 'react'
import { Link } from 'react-router-dom'

function UserProfile() {
  return (
    <div className='page-container'>
      <h1 className='app-name'>Bushwalk</h1>
      <div>
        <h2 className='user-intro'>Hello Alice, ready to level up your walking?</h2>
      </div>
      {/* Replace with UserProfileStats component */}
      <div className='stats-container'>
        <div className='stat-info'>
          <span className="circle"></span>
          <p>Level 50</p>
        </div>
        <div className="stat-info">
          <span className="circle"></span>
          <p>Level 50</p>
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
        <div className='user-links-container'>
          <Link to='/'>
            <div className='user-link'>
              <p>My tracks</p>
              <img src="icons/arrow.svg" alt="" />
            </div>
          </Link>
          <Link to='/'>
            <div className='user-link'>
              <p>Explore other tracks</p>
              <img src="icons/arrow.svg" alt="" />
            </div>
          </Link>
          <Link to='/'>
            <div className='user-link'>
              <p>Badges earned</p>
              <img src="icons/arrow.svg" alt="" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default UserProfile