const express = require('express')
const db = require('../db/tracks')
const router = express.Router()

// Track routes start here

// GET /api/v1/tracks

// List all tracks
router.get('/', (req, res) => {
  db.listTracks()
    .then((tracks) => {
      const parsedTracks = tracks.map((track) => {
        const lineArray = JSON.parse(track.line) // convert array from string to arrays (beware of trailing commas)
        return { ...track, line: lineArray }
      })

      res.json(parsedTracks)
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

// Get track by ID
router.get('/:id', (req, res) => {
  const id = Number(req.params.id)
  db.getTrackById(id)
    .then((track) => {
      const lineArray = JSON.parse(track.line) // convert array from string to arrays (beware of trailing commas)
      res.json({ ...track, line: lineArray })
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

// Get completed tracks by user ID
router.get('/completed/:userId', (req, res) => {
  const userId = Number(req.params.userId)
  db.getCompletedTrackByUser(userId)
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
