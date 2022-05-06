const connection = require('./connection')

function getUsers(db = connection) {
  return db('users').select(
    'id',
    'auth0_id as auth0Id',
    'name',
    'email',
    'description'
  )
}

function addUser(input, db = connection) {
  const { auth0Id, name, email, description } = input
  const user = {
    auth0_id: auth0Id,
    name,
    email,
    description,
  }
  return db('users').insert(user)
}

function getUserById(id, db = connection) {
  return db('users')
    .where('id', id)
    .select('id', 'name', 'description', 'rank', 'xp')
    .first()
} //test written

module.exports = {
  getUsers,
  addUser,
  getUserById,
}
