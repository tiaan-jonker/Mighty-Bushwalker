const express = require('express')

const { checkJwt } = require('../auth0')

const db = require('../db/badges')
const router = express.Router()

// get all badges
router.get('/', async (req, res) => {
  try {
    const badges = await db.getBadges()
    res.json({ badges })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Unable to retrieve badges' })
  }
})

// get badges by user id
router.get('/:userId', async (req, res) => {
  const userId = Number(req.params.userId)
  try {
    const badges = await db.getBadgesByUser(userId)
    res.json({ badges })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Unable to retrieve badges for this user' })
  }
})

module.exports = router
