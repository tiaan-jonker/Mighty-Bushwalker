import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getUserBadges } from './userHelper'

function ProfileBadgeList() {
  const [badges, setBadges] = useState([])
  const { id } = useParams()

  useEffect(() => {
    getUserBadges(id)
      .then((userBadges) => {
        return setBadges(userBadges)
      })
      .catch((err) => console.log(err))
  }, [id])

  return (
    <section>
      <div className="page-image-container">
        <img
          src="images/placeholder-image.svg"
          alt="placeholder image of track"
        />
      </div>
      <div className="page-container">
        <h2 className="user-badges-intro">My badges</h2>
        <div className="badge-grid">
          {badges.map((badge) => {
            return (<div key={badge.id}className="badge-container">
            <span className="badge-circle"></span>
            <p className="badge-title">{badge.name}</p>
            <p className="badge-description">Completed 3 bird spotting walks</p>
          </div>)
          })}
        </div>
      </div>
    </section>
  )
}

export default ProfileBadgeList
