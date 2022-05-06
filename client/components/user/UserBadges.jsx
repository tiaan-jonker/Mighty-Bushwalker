import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
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

  useEffect(() => {
    console.log(badges.badges)
  }, [badges])

  const badgesToMap = badges.badges

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
          {/* {badgesToMap.map((badge) => {
            return <h1>Hello</h1>
          })} */}
          {/* <div className="badge-container">
            <span className="badge-circle"></span>
            <p className="badge-title">Birdman</p>
            <p className="badge-description">Completed 3 bird spotting walks</p>
          </div>
          <div className="badge-container">
            <span className="badge-circle"></span>
            <p className="badge-title">Birdman</p>
            <p className="badge-description">Completed 3 bird spotting walks</p>
          </div>
          <div className="badge-container">
            <span className="badge-circle"></span>
            <p className="badge-title">Birdman</p>
            <p className="badge-description">Completed 3 bird spotting walks</p>
          </div> */}
        </div>
      </div>
    </section>
  )
}

export default ProfileBadgeList
