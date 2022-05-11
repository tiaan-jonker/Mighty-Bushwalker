const express = require('express')
const db = require('../db/tracks')
const router = express.Router()

// Track routes start here

// GET /api/v1/tracks

// List all tracks

// get user_tracks data (saved / closed)
router.get('/userTracks/:userId', (req, res) => {
  const userId = Number(req.params.userId)
  db.getUserTrackByUser(userId)
    .then((tracks) => {
      const parsedTracks = tracks.map((track) => {
        const lineArray = JSON.parse(track.line) // convert array from string to arrays (beware of trailing commas)
        return { ...track, line: lineArray }
      })
      res.json(parsedTracks)
      return null
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

router.get('/walkingUsers/:trackId', (req, res) => {
  const trackId = Number(req.params.trackId)
  db.getWalkingUsersOnTrack(trackId)
    .then((walkingUsers) => {
      res.json(walkingUsers)
      return null
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

// Update status of whether a track is saved by user of not
router.patch('/saved', (req, res) => {
  const { userId, trackId } = req.body
  const savedTrack = {
    userId,
    trackId,
    status: 1,
  }
  db.updateSavedStatus(savedTrack)
    .then(() => {
      res.sendStatus(200)
      return null
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Unable to update track' })
    })
})

// Update status of whether a track is saved by user of not
router.patch('/hiking', (req, res) => {
  const { userId, trackId } = req.body
  const hikedTrack = {
    userId,
    trackId,
    status: 1,
  }
  db.updateHikingStatus(hikedTrack)
    .then(() => {
      res.sendStatus(200)
      return null
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Unable to mark track as being hiked' })
    })
})

router.patch('/hiked', (req, res) => {
  const { userId, trackId } = req.body
  const hikedTrack = {
    userId,
    trackId,
    status: 0,
  }
  db.updateHikingStatus(hikedTrack)
    .then(() => {
      res.sendStatus(200)
      return null
    })
    .catch((err) => {
      console.log(err)
      res
        .status(500)
        .json({ message: 'Unable to mark track as no longer being hiked' })
    })
})

// update status of whether a track is completed by user of not
router.patch('/completed', (req, res) => {
  const { userId, trackId, points } = req.body
  const current = new Date()
  const lastCompletion = `${
    current.getMonth() + 1
  }/${current.getDate()}/${current.getFullYear()}`

  const completedTrack = {
    userId,
    trackId,
    status: 1,
    lastCompletion,
  }
  db.updateCompletedStatus(completedTrack)
    .then(() => {
      return db.addXp(userId, points)
    })
    .then(() => {
      return db.resetUserHikingStatus(userId)
    })
    .then(() => {
      res.sendStatus(200)
      return null
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Unable to update track' })
    })
})

//
//** UNUSED **//

router.patch('/unsaved', (req, res) => {
  const { userId, trackId } = req.body
  const savedTrack = {
    userId,
    trackId,
    status: 0,
  }
  db.updateSavedStatus(savedTrack)
    .then(() => {
      res.sendStatus(200)
      return null
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Unable to unsave track' })
    })
})

module.exports = router
