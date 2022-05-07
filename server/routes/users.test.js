const request = require('supertest')
const server = require('../server')
const db = require('../db/users')

const { generateUserTrackData } = require('../db/dbHelpers')

jest.mock('../db/users')
jest.mock('../db/dbHelpers')

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

test('POST /addNewUserTracks adds new track', () => {
  expect.assertions()
  db.addNewUserTracks = jest.fn()
  db.addNewUserTracks.mockImplementation(() => {
    return Promise.resolve()
  })
  const newTrack = generateUserTrackData()
  return request(server)
    .post('/api/v1/users')
    .send(newTrack)
    .expect(201)
    .then((response) => {
      expect(response.status).toBe(201)
      return null
    })
})
