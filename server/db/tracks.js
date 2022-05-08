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
} //test written

function updateSavedStatus({ userId, trackId, status }, db = connection) {
  const savedTrack = { user_id: userId, track_id: trackId }
  return db('user_tracks').where(savedTrack).update('saved', status)
}

function updateCompletedStatus({ userId, trackId, status }, db = connection) {
  const completedTrack = { user_id: userId, track_id: trackId }
  return db('user_tracks').where(completedTrack).update('completed', status)
}

function addXp(userId, points, db = connection) {
  return db('users').where('id', userId).increment('xp', points)
}

function removeXp(userId, points, db = connection) {
  return db('users').where('id', userId).decrement('xp', points)
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
      'points',
      'lon',
      'lat',
      'line',
      'difficulty'
    )
    .first()
}

// possibly redundant
function getSavedTrackByUser(userId, db = connection) {
  const query = {
    user_id: userId,
    saved: 1,
  }
  return db('user_tracks')
    .join('track_data', 'track_data.id', 'user_tracks.track_id')
    .select('id')
    .where(query)
}

// possibly redundant
function getCompletedTrackByUser(userId, db = connection) {
  const query = {
    user_id: userId,
    completed: 1,
  }
  return db('user_tracks')
    .join('track_data', 'track_data.id', 'user_tracks.track_id')
    .select('id')
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
    .select(
      'track_data.id',
      'track_data.name',
      'track_data.length',
      'track_data.difficulty',
      'track_data.days',
      'track_data.hours',
      'track_data.lat',
      'track_data.lon'
    )
    .where(query)
}

function getUserTrackByUser(userId, db = connection) {
  const query = {
    user_id: userId,
  }
  return db('user_tracks')
    .join('track_data', 'track_data.id', 'user_tracks.track_id')
    .select(
      'track_id',
      'name',
      'saved',
      'completed',
      'points',
      'hours',
      'difficulty',
      'lat',
      'lon',
      'track_data.length'
    )
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
  getUserTrackByUser,
  addXp,
  removeXp,
}
