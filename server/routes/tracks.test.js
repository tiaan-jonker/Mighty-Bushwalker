const request = require('supertest')

const server = require('../server')
const db = require('../db/tracks')
// const dbUsers = require('../db/users')
// const auth0 = require('../routes/auth')
// const log = require('../logger')

jest.mock('../logger')
jest.mock('../db/tracks')
jest.mock('../db/users')
// jest.mock('../routes/auth')

const mockTracks = [
  {
    id: 1,
    assetId: 666,
    name: 'trackie mctrackinson',
    length: '666',
    days: '100',
    hours: '2400',
    return: true,
    lon: 80,
    lat: 50,
    line: '[80, 50]',
    difficulty: 'impossible',
  },
  {
    id: 2,
    assetId: 667,
    name: 'Linda',
    length: 50,
    days: 500,
    hours: 5000,
    return: false,
    lon: 60,
    lat: 60,
    line: '[80, 50]',
    difficulty: 'possible',
  },
]

const mockTrack = {
  id: 1,
  assetId: 666,
  name: 'trackie mctrackinson',
  length: '666',
  days: '100',
  hours: '2400',
  return: true,
  lon: 80,
  lat: 50,
  line: '[80, 50]',
  difficulty: 'impossible',
}

describe('GET /api/v1/tracks', () => {
  it('responds with track_data on res body', () => {
    db.getUserTrackByUser.mockImplementation(() => Promise.resolve(mockTracks))
    return request(server)
      .get('/api/v1/tracks/userTracks/1')
      .expect('Content-Type', /json/)
      .expect(200)
      .then((res) => {
        expect(res.body).toHaveLength(2)
        return null
      })
  })

  it('responds with 500 and correct error object on DB error', () => {
    db.getUserTrackByUser.mockImplementation(() =>
      Promise.reject(new Error('mock getTracks error'))
    )
    return request(server)
      .get('/api/v1/tracks/userTracks/1')
      .expect(500)
      .then((err) => {
        expect(err.body.message).toBe('Something went wrong')
        return null
      })
  })
})

//testing PATCH routes
//check to see if 'updateSavedStatus is written how we want it to be

//could we use 'getSavedTrackByUser' for something? I stuck it in.
//I thought it could prove the test better.
describe('PATCH /api/v1/tracks/saved', () => {
  it('updates saved status in user_tracks table', () => {
    db.updateSavedStatus.mockImplementation((mockUserTracks) =>
      Promise.resolve()
    )
    return (
      request(server)
        .patch('/api/v1/tracks/saved')
        // .expect('Content-Type', /json/)
        .expect(200)
        .then((res) => {
          // console.log('NEWRESINNIT', res)
          expect(res.text).toBe('OK')

          return null
        })
    )
  })
})
it('responds with 500 and correct error object on DB error', () => {
  db.updateSavedStatus.mockImplementation(() =>
    Promise.reject(new Error('Db operation error'))
  )
  return request(server)
    .patch('/api/v1/tracks/saved')
    .expect('Content-Type', /json/)
    .then((res) => {
      expect(res.status).toBe(500)
      // console.log('LOG!', res)
      expect(res.body.message).toBe('Unable to update track')
      return null
    })
})

describe('PATCH /api/v1/tracks/completed', () => {
  it('updates completed status in user_tracks table', () => {
    db.updateCompletedStatus.mockImplementation((mockUserTracks) =>
      Promise.resolve(mockUserTracks)
    )
    db.addXp.mockImplementation(() => Promise.resolve())
    db.resetUserHikingStatus.mockImplementation(() => Promise.resolve())
    return (
      request(server)
        .patch('/api/v1/tracks/completed')
        // .expect('Content-Type', /json/)
        .expect(200)
        .then((res) => {
          // console.log('NEWRESINNIT', res)
          expect(res.text).toBe('OK')

          return null
        })
    )
  })
})
it('responds with 500 and correct error object on DB error', () => {
  db.updateCompletedStatus.mockImplementation(() =>
    Promise.reject(new Error('Db operation error'))
  )
  db.addXp.mockImplementation(() => Promise.resolve())
  db.resetUserHikingStatus.mockImplementation(() => Promise.resolve())
  return request(server)
    .patch('/api/v1/tracks/completed')
    .expect('Content-Type', /json/)
    .then((res) => {
      expect(res.status).toBe(500)
      // console.log('LOG!', res)
      expect(res.body.message).toBe('Unable to update track')
      return null
    })
})

describe('GET /api/v1/tracks', () => {
  it('responds with track_data on res body', () => {
    db.getWalkingUsersOnTrack.mockImplementation(() =>
      Promise.resolve(mockTracks)
    )
    return request(server)
      .get('/api/v1/tracks/walkingUsers/1')
      .expect('Content-Type', /json/)
      .expect(200)
      .then((res) => {
        expect(res.body).toHaveLength(2)
        return null
      })
  })

  it('responds with 500 and correct error object on DB error', () => {
    db.getWalkingUsersOnTrack.mockImplementation(() =>
      Promise.reject(new Error('mock getTracks error'))
    )
    return request(server)
      .get('/api/v1/tracks/walkingUsers/1')
      .expect(500)
      .then((err) => {
        expect(err.body.message).toBe('Something went wrong')
        return null
      })
  })
})
