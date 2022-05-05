const connection = require('./connection')

function listTracks(db = connection) {
  return db('track_data').select()
}

function addSavedTrack({ userId, trackId }, db = connection) {
  const savedTrack = { user_id: userId, track_id: trackId }
  return db('saved_tracks').insert(savedTrack)
}

function addCompletedTrack({ userId, trackId }, db = connection) {
  const completedTrack = { user_id: userId, track_id: trackId }
  return db('completed_tracks').insert(completedTrack)
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
  addSavedTrack,
  addCompletedTrack,
}
