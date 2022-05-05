const express = require('express')
const db = require('../db/users')
const router = express.Router()

// User routes start here

// GET /api/v1/users/:userId

router.get('/:id', (req, res) => {
  const id = Number(req.params.id)
  db.getUserById(id)
    .then((users) => {
      res.json(users)
      return null
    })
    .catch((err) => {
      console.error(err)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

module.exports = router
