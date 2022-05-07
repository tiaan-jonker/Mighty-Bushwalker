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
  return users.getUserById('1', testDb).then((user) => {
    expect(user.id).toBe(1)
    expect(user.name).toBe('kelmarna')
    expect(user.description).toBe('the awesome developer')
    expect(user.rank).toBe('Bush Lord')
    expect(user.xp).toBe(1000)
    return null
  })
})

test('addUser adds a user to the users table', () => {
  const newUser = {
    id: 3,
    auth0_id: 69,
    name: 'Purious Fube',
    email: 'pfube@quare.com',
    description: 'great guy',
    rank: 'expert',
    xp: 9001,
  }
  return users.addUser(newUser, testDb).then((users) => {
    console.log(users)
    expect(users[2]).toBe('Purious Fube')
  })
})

// test('getUsers returns a list of all users', () => {
//   return users.getUsers
// })
