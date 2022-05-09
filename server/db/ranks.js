const connection = require('./connection')

function listRanks(db = connection) {
  return db('ranks').select()
}

module.exports = { listRanks }
