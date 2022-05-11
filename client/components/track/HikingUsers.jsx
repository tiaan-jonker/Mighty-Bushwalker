import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getWalkingUsers } from './trackHelper'
import { capitaliseFirstLetter } from '../../utils'

function HikingUsers() {
  const user = useSelector((state) => state.user)

  const [walkingUsers, setWalkingUsers] = useState([])
  const { id } = useParams()

  useEffect(async () => {
    const walkers = await getWalkingUsers(id)

    setWalkingUsers(walkers)
  }, [user]) // when the user says they are hiking the user should update,
  // and this should refresh the list of walkers to show the current user

  return (
    <div>
      <p className="track-info-heading">Hikers on this track</p>
      <div className="hikers-info-line">
        <div className="hikers-info-container">
          {walkingUsers.length > 0 ? (
            <>
              {walkingUsers.map((walker) => {
                return walker.id == user.id ? (
                  <div key={walker.id} className="self-hiker-info">
                    {capitaliseFirstLetter(walker.displayName)} - &ldquo;
                    {walker.status}&rdquo;
                  </div>
                ) : (
                  <div key={walker.id} className="hiker-info">
                    {capitaliseFirstLetter(walker.displayName)} - &ldquo;
                    {walker.status}&rdquo;
                  </div>
                )
              })}
            </>
          ) : (
            <p>No hikers out there today</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default HikingUsers
