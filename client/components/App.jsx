import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { cacheUser } from '../auth0-utils'
import Registration from './Registration'
import { Routes, Route } from 'react-router-dom'
import UserProfile from './user/UserProfile'
import UserTracks from './user/UserTracks'
import UserBadges from './user/UserBadges'
import Track from './track/Track'
import Tracks from './tracks/TracksList'
import Nav from './Nav'
import Landing from './Landing'

function App() {
  cacheUser(useAuth0)

  return (
    <div className="mobile-container">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/user/:id" element={<UserProfile />} />
        <Route path="/track/:id" element={<Track />} />
        <Route path="/tracks" element={<Tracks />} />
        <Route path="/user/:id/usertracks" element={<UserTracks />} />
        <Route path="/user/:id/userbadges" element={<UserBadges />} />
      </Routes>
      <Nav />
    </div>
  )
}

export default App
