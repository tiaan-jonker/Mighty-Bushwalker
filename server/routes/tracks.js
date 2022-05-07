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
      // console.log(parsedTracks)
      return null
    })
    .catch((err) => {
      console.error(err.message)
      res.status(500).send(err.message)
    })
})

// Update status of whether a track is saved by user of not
router.patch('/saved', (req, res) => {
  const { userId, trackId, status } = req.body
  const savedTrack = {
    userId,
    trackId,
    status,
  }
  db.updateSavedStatus(savedTrack)
    .then(() => {
      res.sendStatus(201)
      return null
    })
    .catch((err) => {
      console.error(err)
      res.status(500).json({ message: 'Unable to update track' })
    })
})

// update status of whether a track is completed by user of not
router.patch('/completed', (req, res) => {
  const { userId, trackId, status } = req.body
  const completedTrack = {
    userId,
    trackId,
    status,
  }
  db.updateCompletedStatus(completedTrack)
    .then(() => {
      res.sendStatus(201)
      return null
    })
    .catch((err) => {
      console.error(err)
      res.status(500).json({ message: 'Unable to update track' })
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

// Get other tracks (not completed nor saved) by user ID
router.get('/other/:userId', (req, res) => {
  const userId = Number(req.params.userId)
  db.getOtherTrackByUser(userId)
    .then((tracks) => {
      res.json(tracks)
      return null
    })
    .catch((err) => {
      console.error(err)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

// get user_tracks data (saved / closed)
router.get('/userTracks/:userId', (req, res) => {
  const userId = Number(req.params.userId)
  db.getUserTrackByUser(userId)
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
