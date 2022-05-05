import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { cacheUser } from '../auth0-utils'
import Nav from './Nav'
import PingRoutes from './PingRoutes'
import Registration from './Registration'
import Users from './Users'
import { Routes, Route } from 'react-router-dom'
import Map from './Map'

function App() {
  cacheUser(useAuth0)

  return (
    <div className="mobile-container">
      <Routes>
        <Route path="/" element={<Nav />} />
        <Route path="/" element={<Users />} />
        <Route path="/" element={<PingRoutes />} />
        <Route path="/profile" element={<Registration />} />
        <Route path="/map" element={<Map />} />
      </Routes>
    </div>
  )
}

export default App
