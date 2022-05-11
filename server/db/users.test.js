const knex = require('knex')
const config = require('./knexfile').test
const testDb = knex(config)

const users = require('./users')

// Prevent Jest from timing out (5s often isn't enough)
jest.setTimeout(10000)

beforeAll(() => {
  return testDb.migrate.latest()
})

beforeEach(() => {
  return testDb.seed.run()
})

afterAll(() => {
  return testDb.destroy()
})

test('getUserById returns the correct user', () => {
  return users
    .getUsersByAuthId('auth0|61414f84d35ac900717bc280', testDb)
    .then((user) => {
      expect(user[0].id).toBe(1)
      expect(user[0].name).toBe('kelmarna')
      expect(user[0].description).toBe('the awesome developer')
      expect(user[0].rank).toBe('Bush Lord')
      expect(user[0].xp).toBe(1000)
      return null
    })
})

test('addUser adds a user to the users table', () => {
  const newUser = {
    auth0Id: '69',
    name: 'Purious Fube',
    email: 'pfube@quare.com',
    description: 'great guy',
  }
  return users
    .addUser(newUser, testDb)
    .then(() => {
      return testDb('users').where({ auth0_id: '69' }).first()
    })
    .then((user) => {
      expect(user.name).toBe('Purious Fube')
      expect(user.email).toBe('pfube@quare.com')
      expect(user.description).toBe('great guy')
      expect(user.xp).toBe(500)
    })
})

// test('getUsers returns a list of all users', () => {
//   return users.getUsers
// })
