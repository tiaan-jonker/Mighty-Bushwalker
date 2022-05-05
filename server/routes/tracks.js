const express = require('express')
const db = require('../db/tracks')
const router = express.Router()

// Track routes start here

// GET /api/v1/tracks

// List all tracks
router.get('/', (req, res) => {
  db.listTracks()
    .then((tracks) => {
      res.json(tracks)
      return null
    })
    .catch((err) => {
      console.error(err)
      res.status(500).send(err.message)
    })
})

// Get track by ID
router.get('/:id', (req, res) => {
  const id = Number(req.params.id)
  db.getTrackById(id)
    .then((tracks) => {
      res.json(tracks)
      return null
    })
    .catch((err) => {
      console.error(err)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

// Get saved track by user ID
router.get('/saved/:userId', (req, res) => {
  const userId = Number(req.params.userId)
  db.getSavedTrackByUser(userId)
    .then((tracks) => {
      res.json(tracks)
      return null
    })
    .catch((err) => {
      console.error(err)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

module.exports = router
