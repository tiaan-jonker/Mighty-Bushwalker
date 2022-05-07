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
    db.listTracks.mockImplementation(() => Promise.resolve(mockTracks))
    return request(server)
      .get('/api/v1/tracks')
      .expect('Content-Type', /json/)
      .expect(200)
      .then((res) => {
        // console.log(res.body)
        expect(res.body).toHaveLength(2)
        return null
      })
  })

  it('responds with 500 and correct error object on DB error', () => {
    db.listTracks.mockImplementation(() =>
      Promise.reject(new Error('mock getTracks error'))
    )
    return (
      request(server)
        .get('/api/v1/tracks')
        // .expect('Content-Type', json)
        .expect(500)
        .then((err) => {
          // console.log('err!!! ', err.text)
          expect(err.text).toBe('mock getTracks error')
          return null
        })
    )
  })
})

describe('GET /api/v1/tracks/:id', () => {
  it('responds with data for a single track', () => {
    // expect.assertions(4)
    db.getTrackById.mockImplementation((id) => {
      expect(id).toBe(1)
      return Promise.resolve(mockTrack)
    })
    return request(server)
      .get('/api/v1/tracks/1')
      .expect('Content-Type', /json/)
      .expect(200)
      .then((res) => {
        console.log(res.body)
        expect(res.body.assetId).toBe(666)
        return null
      })
  })

  it('responds with 500 and correct error object on DB error', () => {
    // expect.assertions(2)
    db.getTrackById.mockImplementation(() =>
      Promise.reject(new Error('mock getTrackById error'))
    )
    return (
      request(server)
        .get('/api/v1/tracks/1')
        // .expect('Content-Type', json)
        .expect(500)
        .then((res) => {
          expect(res.body.message).toBe('Something went wrong')
          return null
        })
    )
  })
})

//testing PATCH routes
//check to see if 'updateSavedStatus is written how we want it to be

//could we use 'getSavedTrackByUser' for something? I stuck it in.
//I thought it could prove the test better.
describe('PATCH /api/v1/tracks/saved', () => {
  it('updates saved status in user_tracks table', () => {
    db.updateSavedStatus.mockImplementation((mockUserTracks) =>
      Promise.resolve(mockUserTracks)
    )
    db.getSavedTrackByUser.mockImplementation((mockUserTracks) =>
      Promise.resolve(mockUserTracks)
    )
    return (
      request(server)
        .patch('/api/v1/tracks/saved')
        // .expect('Content-Type', /json/)
        .expect(201)
        .then((res) => {
          // console.log('NEWRESINNIT', res)
          expect(res.text).toBe('Created')

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
    db.getSavedTrackByUser.mockImplementation((mockUserTracks) =>
      Promise.resolve(mockUserTracks)
    )
    return (
      request(server)
        .patch('/api/v1/tracks/completed')
        // .expect('Content-Type', /json/)
        .expect(201)
        .then((res) => {
          // console.log('NEWRESINNIT', res)
          expect(res.text).toBe('Created')

          return null
        })
    )
  })
})
it('responds with 500 and correct error object on DB error', () => {
  db.updateCompletedStatus.mockImplementation(() =>
    Promise.reject(new Error('Db operation error'))
  )
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

const mockUserTracks = [
  {
    userId: 1,
    trackId: 1,
    completed: 0,
    saved: 0,
  },
  {
    userId: 2,
    trackId: 2,
    completed: 1,
    saved: 1,
  },
]

describe('GET /api/v1/tracks/saved/:userId', () => {
  it('responds with all the tracks a user has saved', () => {
    // expect.assertions(2)
    db.getSavedTrackByUser.mockImplementation((mockUserTracks) => {
      expect(mockUserTracks).toBe(1)
      return Promise.resolve(mockUserTracks)
    })
    return request(server)
      .get('/api/v1/tracks/saved/1')
      .expect('Content-Type', /json/)
      .expect(200)
      .then((res) => {
        console.log(res)
        expect(res.body).toBe(1)
        return null
      })
  })

  it('responds with 500 and correct error object on DB error', () => {
    db.getSavedTrackByUser.mockImplementation(() =>
      Promise.reject(new Error('mock getSavedTrackByUser error'))
    )
    return request(server)
      .get('/api/v1/tracks/saved/999')
      .expect('Content-Type', /json/)
      .expect(500)
      .then((res) => {
        // expect(log).toHaveBeenCalledWith('mock getBadgesByUser error')
        expect(res.body.message).toBe('Something went wrong')
        return null
      })
  })
})
