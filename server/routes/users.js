const express = require('express')
const db = require('../db/users')
const router = express.Router()

// User routes start here

router.post('/', async (req, res) => {
  const { auth0Id, name, email, description } = req.body
  const user = { auth0Id, name, email, description }

  try {
    const userId = await db.addUser(user)
    await db.addNewUserTracks(userId[0])
    res.sendStatus(201)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'unable to insert user into the database' })
  }
})

router.patch('/', (req, res) => {
  const { displayName, id, status } = req.body
  const updateData = { displayName, id, status }
  db.updateNote(updateData)
    .then(() => {
      res.sendStatus(200)
      return null
    })
    .catch((err) => {
      console.error(err)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

// GET /api/v1/users/:userId

// router.get('/:id', (req, res) => {
//   const id = Number(req.params.id)
//   db.getUserById(id)
//     .then((users) => {
//       res.json(users)
//       return null
//     })
//     .catch((err) => {
//       console.error(err)
//       res.status(500).json({ message: 'Something went wrong' })
//     })
// })

// Get by auth0Id

router.get('/:auth0Id', (req, res) => {
  const auth0Id = req.params.auth0Id
  db.getUsersByAuthId(auth0Id)
    .then((user) => {
      res.json(user)
      return null
    })
    .catch((err) => {
      console.error(err)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

module.exports = router
