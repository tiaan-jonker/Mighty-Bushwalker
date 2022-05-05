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

function getSavedTrackByUser(userId, db = connection) {
  return db('saved_tracks')
    .where('user_id', userId)
    .join('track_data', 'track_data.id', 'saved_tracks.track_id')
    .select('track_id')
}

function getCompletedTrackByUser(userId, db = connection) {
  return db('completed_tracks')
    .where('user_id', userId)
    .join('track_data', 'track_data.id', 'completed_tracks.track_id')
    .select('track_id')
}

module.exports = {
  getTrackById,
  listTracks,
<<<<<<< HEAD
  addSavedTrack,
  addCompletedTrack,
=======
  getSavedTrackByUser,
  getCompletedTrackByUser,
>>>>>>> fdbecfd622b0903f8f6ee82a875de134c198c659
}
