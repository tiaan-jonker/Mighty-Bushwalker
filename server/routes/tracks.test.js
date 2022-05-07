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
    // expect.assertions(2)
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
