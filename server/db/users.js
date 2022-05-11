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
      'rank',
      'xp',
      'display_name as displayName',
      'status'
    )
}

function addUser(input, db = connection) {
  const { auth0Id, name, email, description } = input
  const user = {
    auth0_id: auth0Id,
    name,
    email,
    description,
    xp: 500,
    display_name: name,
    status: '',
  }
  return db('users').insert(user)
}

function addNewUserTracks(userId, db = connection) {
  const newUserTracks = generateUserTrackData(userId)
  return db('user_tracks').insert(newUserTracks)
}

function updateNote({ displayName, id, status }, db = connection) {
  const noteDetails = { display_name: displayName, status }
  return db('users').where('id', id).update(noteDetails)
}

//
//** UNUSED  **//

module.exports = {
  addUser,
  addNewUserTracks,
  getUsersByAuthId,
  updateNote,
}
