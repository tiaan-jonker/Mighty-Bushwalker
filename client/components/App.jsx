import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { cacheUser } from '../auth0-utils'
import Registration from './Registration'
import { Routes, Route } from 'react-router-dom'
import UserProfile from './user/UserProfile'
import Track from './track/Track'

function App() {
  cacheUser(useAuth0)

  return (
    <div className="mobile-container">
      <Routes>
        <Route path="/profile" element={<Registration />} />
        <Route path="/" element={<UserProfile />} />
        <Route path="/track" element={<Track />} />
      </Routes>
    </div>
  )
}

export default App
