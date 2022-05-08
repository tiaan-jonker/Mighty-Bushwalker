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

  const placeholderUser = {
    id: 1,
    auth0Id: 'auth0|61414f84d35ac900717bc280',
  }

  return (
    <div className="mobile-container">
      <Routes>
        <Route
          path="/"
          element={<Landing placeholderUser={placeholderUser} />}
        />
        <Route
          path="/user/:id"
          element={<UserProfile placeholderUser={placeholderUser} />}
        />
        <Route path="/track/:id" element={<Track />} />
        <Route path="/tracks" element={<Tracks />} />
        <Route
          path="/user/:id/usertracks"
          element={<UserTracks placeholderUser={placeholderUser} />}
        />
        <Route
          path="/user/:id/userbadges"
          element={<UserBadges placeholderUser={placeholderUser} />}
        />
      </Routes>
      <Nav placeholderUser={placeholderUser} />
    </div>
  )
}

export default App
