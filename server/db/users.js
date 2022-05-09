const connection = require('./connection')
const { generateUserTrackData } = require('./dbHelpers')

function getUsers(db = connection) {
  return db('users').select(
    'id',
    'auth0_id as auth0Id',
    'name',
    'email',
    'description'
  )
}

function getUsersByAuthId(auth0Id, db = connection) {
  return db('users')
    .where('auth0_id', auth0Id)
    .select(
      'auth0_id as id',
      'name',
      'email',
      'description',
      'id',
      'description',
      'rank',
      'xp'
    )
}

function addUser(input, db = connection) {
  const { auth0Id, name, email, description, xp, rank } = input
  const user = {
    auth0_id: auth0Id,
    name,
    email,
    description,
    xp,
    rank,
  }
  return db('users').insert(user)
}

function getUserById(id, db = connection) {
  return db('users')
    .where('id', id)
    .select('id', 'name', 'description', 'rank', 'xp')
    .first()
}

function addNewUserTracks(userId, db = connection) {
  const newUserTracks = generateUserTrackData(userId)
  return db('user_tracks').insert(newUserTracks)
}

module.exports = {
  getUsers,
  addUser,
  getUserById,
  addNewUserTracks,
  getUsersByAuthId,
}
