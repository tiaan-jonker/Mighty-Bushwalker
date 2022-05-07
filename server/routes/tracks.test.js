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

//testing PATCH routes

describe('PATCH /api/v1/tracks/saved', () => {
  db.updateSavedStatus.mockImplementation((mockTrack) => {
    return Promise.resolve(mockTrack)
  })

  it('updates track to saved if its status is 1', () => {
    // expect.assertions(6)
    db.updateEvent.mockImplementation((updatedEvent) => {
      expect(updatedEvent.description).toMatch('best event')
      expect(updatedEvent.id).toBe(2)
      expect(updatedEvent.title).toBe('cooler event')
      expect(updatedEvent.volunteersNeeded).toBe(1000)
      expect(updatedEvent.date).toBe('2021-01-01')
      return Promise.resolve({
        id: 2,
        title: 'cooler event',
        date: '2021-01-01',
        volunteersNeeded: 1000,
        description: 'the best event ever',
      })
    })
    return request(server)
      .patch('/api/v1/events/2')
      .set(testAuthAdminHeader)
      .send({
        id: 2,
        title: 'cooler event',
        date: '2021-01-01',
        volunteersNeeded: 1000,
        description: 'the best event ever',
      })
      .expect('Content-Type', /json/)
      .expect(200)
      .then((res) => {
        expect(res.body.title).toBe('cooler event')
        return null
      })

    it('updates track to unsaved if status is 0', () => {
      expect.assertions(6)
      db.updateEvent.mockImplementation((updatedEvent) => {
        expect(updatedEvent.description).toMatch('best event')
        expect(updatedEvent.id).toBe(2)
        expect(updatedEvent.title).toBe('cooler event')
        expect(updatedEvent.volunteersNeeded).toBe(1000)
        expect(updatedEvent.date).toBe('2021-01-01')
        return Promise.resolve({
          id: 2,
          title: 'cooler event',
          date: '2021-01-01',
          volunteersNeeded: 1000,
          description: 'the best event ever',
        })
      })
      return request(server)
        .patch('/api/v1/events/2')
        .set(testAuthAdminHeader)
        .send({
          id: 2,
          title: 'cooler event',
          date: '2021-01-01',
          volunteersNeeded: 1000,
          description: 'the best event ever',
        })
        .expect('Content-Type', /json/)
        .expect(200)
        .then((res) => {
          expect(res.body.title).toBe('cooler event')
          return null
        })

      it('Test for 500 response and expect a json error object during db error', () => {
        db.setVolunteerAttendance.mockImplementation(() =>
          Promise.reject(new Error('Db operation error'))
        )
        return request(server)
          .patch('/api/v1/volunteers')
          .set(mockAuthAdminHeader)
          .expect('Content-Type', /json/)
          .then((res) => {
            expect(res.status).toBe(500)
            return null
          })
      })
    })
  })
})
