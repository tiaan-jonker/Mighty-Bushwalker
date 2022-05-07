const request = require('supertest')
const server = require('../server')
const db = require('../db/users')

jest.mock('../db/users')

// Arrange
// Act
// Assert

test('GET /:auth0id returns users by auth0id', () => {
  expect.assertions()
  db.getUsersByAuthId.mockImplementation(() => {
    return Promise.resolve([
      {
        id: 1,
        auth0_id: 'auth0|61414f84d35ac900717bc280',
        name: 'kelmarna',
        email: 'kelmarna@email.nz',
        description: 'the awesome developer',
        rank: 'Bush Lord',
        xp: '1000',
      },
      {
        id: 2,
        auth0_id: 'auth0|61414f84d35ac900717bc280',
        name: 'kelmarna',
        email: 'kelmarna@email.nz',
        description: 'the awesome developer',
        rank: 'Bush Lord',
        xp: '1000',
      },
    ])
  })
  return request(server)
    .get('/api/v1/users/auth0|61414f84d35ac900717bc280')
    .expect(200)
    .then((response) => {
      expect(response.body).toHaveLength(2)
      return null
    })
})


