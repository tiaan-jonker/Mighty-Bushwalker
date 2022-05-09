const connection = require('./connection')
const { generateUserTrackData } = require('./dbHelpers')

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
  const { auth0Id, name, email, description } = input
  const user = {
    auth0_id: auth0Id,
    name,
    email,
    description,
    xp: 0,
  }
  return db('users').insert(user)
}

function addNewUserTracks(userId, db = connection) {
  const newUserTracks = generateUserTrackData(userId)
  return db('user_tracks').insert(newUserTracks)
}

//
//** UNUSED  **//

function getUserById(id, db = connection) {
  return db('users')
    .where('id', id)
    .select('id', 'name', 'description', 'rank', 'xp')
    .first()
}

function getUsers(db = connection) {
  return db('users').select(
    'id',
    'auth0_id as auth0Id',
    'name',
    'email',
    'description'
  )
}

module.exports = {
  getUsers,
  addUser,
  getUserById,
  addNewUserTracks,
  getUsersByAuthId,
}
