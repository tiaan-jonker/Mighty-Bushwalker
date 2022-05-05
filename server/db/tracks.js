const connection = require('./connection')

function listTracks(db = connection) {
  return db('track_data').select()
}

module.exports = {
  listTracks,
}
