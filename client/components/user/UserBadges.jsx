import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getAllBadges, getUserBadges } from './userHelper'

function ProfileBadgeList() {
  const [badges, setBadges] = useState([])

  const { id } = useParams()

  useEffect(async () => {
    const userBadges = await getUserBadges(id)
    const badgesResults = await getAllBadges()

    const userBadgesIds = userBadges.map((badge) => badge.id)

    const badges = badgesResults.map((badge) =>
      userBadgesIds.includes(badge.id)
        ? { ...badge, achieved: true }
        : { ...badge, achieved: false }
    )

    return setBadges(badges)
  }, [id])

  return (
    <section>
      <div className="page-container">
        <div>
          <h2 className="user-intro">My badges</h2>
          <h3 className="user-intro-sub">See what you have achieved</h3>
        </div>
        <div className="badge-grid">
          {badges.map((badge) => {
            return (
              <div key={badge.id} className="badge-container">
                <span className="badge-circle">
                  <img
                    src={`/icons/badges/${badge.image}.png`}
                    className="badge-image"
                    style={badge.achieved ? null : { filter: 'grayscale(1)' }}
                  />
                </span>
                <p className="badge-title">{badge.name}</p>
                <p className="badge-criteria">{badge.criteria}</p>
                {badge.achieved && <p>Achieved</p>}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ProfileBadgeList
