const express = require('express')
const path = require('path')

const usersRoutes = require('./routes/users')

const trackRoutes = require('./routes/tracks')

const badgesRoutes = require('./routes/badges')

const ranksRoutes = require('./routes/ranks')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/users', usersRoutes)

server.use('/api/v1/tracks', trackRoutes)

server.use('/api/v1/badges', badgesRoutes)

server.use('/api/v1/ranks', ranksRoutes)

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

module.exports = server
