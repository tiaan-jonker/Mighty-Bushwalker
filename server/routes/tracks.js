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

module.exports = router
