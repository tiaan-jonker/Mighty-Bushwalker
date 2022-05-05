const connection = require('./connection')

function listTracks(db = connection) {
  return db('track_data').select()
}

function getTrackById(id, db = connection) {
  return db('track_data')
    .where('id', id)
    .select(
      'id',
      'name',
      'length',
      'duration',
      'route_type as routeType',
      'location',
      'location_coords as locationCoords'
    )
    .first()
}

module.exports = {
  getTrackById,
  listTracks,
}
