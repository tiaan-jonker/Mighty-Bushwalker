const express = require('express')
const db = require('../db/ranks')
const router = express.Router()

// get all ranks
router.get('/', async (req, res) => {
  try {
    const ranks = await db.listRanks()
    res.json(ranks)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Unable to retrieve badges' })
  }
})
module.exports = router
