const express = require('express')
const db = require('../db/tracks')
const router = express.Router()

// Track routes start here

// GET /api/v1/tracks

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

router.post('/saved', (req, res) => {
  const { userId, trackId } = req.body
  const savedTrack = {
    userId,
    trackId,
  }
  db.addSavedTrack(savedTrack)
    .then(() => {
      res.sendStatus(201)
      return null
    })
    .catch((err) => {
      console.error(err)
      res.status(500).json({ message: 'Unable to save track' })
    })
})

router.post('/completed', (req, res) => {
  const { userId, trackId } = req.body
  const completedTrack = {
    userId,
    trackId,
  }
  db.addcompletedTrack(completedTrack)
    .then(() => {
      res.sendStatus(201)
      return null
    })
    .catch((err) => {
      console.error(err)
      res.status(500).json({ message: 'Unable to save track as completed' })
    })
})

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

module.exports = router
