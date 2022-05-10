import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getWalkingUsers } from './trackHelper'

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
    <>
      {walkingUsers.map((user) => {
        return (
          <div key={user.id}>
            <p>
              {user.displayName} - {user.status}
            </p>
          </div>
        )
      })}
    </>
  )
}

export default HikingUsers
