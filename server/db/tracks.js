const connection = require('./connection')

function listTracks(db = connection) {
  return db('track_data').select(
    'id',
    'asset_id as assetId',
    'name',
    'length',
    'days',
    'hours',
    'return',
    'lon',
    'lat',
    'line',
    'difficulty'
  )
}

function updateSavedStatus({ userId, trackId, status }, db = connection) {
  const savedTrack = { user_id: userId, track_id: trackId }
  return db('user_tracks').where(savedTrack).update('saved', status)
}

function updateCompletedStatus({ userId, trackId, status }, db = connection) {
  const completedTrack = { user_id: userId, track_id: trackId }
  return db('user_tracks').where(completedTrack).update('completed', status)
}

function getTrackById(id, db = connection) {
  return db('track_data')
    .where('id', id)
    .select(
      'id',
      'asset_id as assetId',
      'name',
      'length',
      'days',
      'hours',
      'return',
      'lon',
      'lat',
      'line',
      'difficulty'
    )
    .first()
}

function getSavedTrackByUser(userId, db = connection) {
  const query = {
    user_id: userId,
    saved: 1,
  }
  return db('user_tracks')
    .join('track_data', 'track_data.id', 'user_tracks.track_id')
    .select('track_id')
    .where(query)
}

function getCompletedTrackByUser(userId, db = connection) {
  const query = {
    user_id: userId,
    completed: 1,
  }
  return db('user_tracks')
    .join('track_data', 'track_data.id', 'user_tracks.track_id')
    .select('track_id')
    .where(query)
}

function getOtherTrackByUser(userId, db = connection) {
  const query = {
    user_id: userId,
    completed: 0,
    saved: 0,
  }
  return db('user_tracks')
    .join('track_data', 'track_data.id', 'user_tracks.track_id')
    .select('track_id')
    .where(query)
}

module.exports = {
  getTrackById,
  listTracks,
  updateSavedStatus,
  updateCompletedStatus,
  getSavedTrackByUser,
  getCompletedTrackByUser,
  getOtherTrackByUser,
}
