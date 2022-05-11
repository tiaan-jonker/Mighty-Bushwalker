const connection = require('./connection')

function addXp(userId, points, db = connection) {
  return db('users').where('id', userId).increment('xp', points)
}

function getUserTrackByUser(userId, db = connection) {
  const query = {
    user_id: userId,
  }
  return db('user_tracks')
    .join('track_data', 'track_data.id', 'user_tracks.track_id')
    .select(
      'track_data.id',
      'track_data.name',
      'user_tracks.saved',
      'user_tracks.completed',
      'track_data.length',
      'track_data.difficulty',
      'track_data.days',
      'track_data.hours',
      'track_data.lat',
      'track_data.lon',
      'track_data.line',
      'track_data.points',
      'track_data.return',
      'user_tracks.last_completion as lastCompletion',
      'user_tracks.total_completions as totalCompletions',
      'user_tracks.hiking'
    )
    .where(query)
}

function updateSavedStatus({ userId, trackId, status }, db = connection) {
  const savedTrack = { user_id: userId, track_id: trackId }
  return db('user_tracks').where(savedTrack).update('saved', status)
}

function updateHikingStatus({ userId, trackId, status }, db = connection) {
  if (status === 0) {
    return db('user_tracks').where('user_id', userId).update('hiking', 0)
  }
  if (status === 1) {
    const hikedTrack = { user_id: userId, track_id: trackId }
    return db('user_tracks').where(hikedTrack).update('hiking', status)
  }
}

function resetUserHikingStatus(userId, db = connection) {
  return db('user_tracks').where('user_id', userId).update('hiking', 0)
}

function updateCompletedStatus(
  { userId, trackId, status, lastCompletion },
  db = connection
) {
  const completedTrack = { user_id: userId, track_id: trackId }
  const updatedData = {
    completed: status,
    last_completion: lastCompletion,
  }
  return db('user_tracks')
    .where(completedTrack)
    .update(updatedData)
    .increment('total_completions')
}

function getWalkingUsersOnTrack(trackId, db = connection) {
  const query = { track_id: trackId, hiking: 1 }
  return db('user_tracks')
    .where(query)
    .join('users', 'users.id', 'user_tracks.user_id')
    .select(
      'users.id as id',
      'users.display_name as displayName',
      'users.status as status'
    )
}

//
//** UNUSED **//

function removeXp(userId, points, db = connection) {
  return db('users').where('id', userId).decrement('xp', points)
}

module.exports = {
  updateSavedStatus,
  updateCompletedStatus,
  getUserTrackByUser,
  addXp,
  removeXp,
  updateHikingStatus,
  getWalkingUsersOnTrack,
  resetUserHikingStatus,
}
