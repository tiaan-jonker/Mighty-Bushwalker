const knex = require('knex')
const config = require('./knexfile').test
const testDb = knex(config)

const tracks = require('./tracks')

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

test('getTrackById returns the correct track', () => {
  return tracks.getTrackById('1', testDb).then((tracks) => {
    expect(tracks.assetId).toBe('2ae1915a-4d05-4e10-9d26-7a552c4ac41f')
    expect(tracks.name).toBe('Aotea Track')
    expect(tracks.days).toBe(3)
    expect(tracks.hours).toBe(14.5)
    expect(tracks).toHaveLength(25)
    expect(tracks.return).toBe(0)
    expect(tracks.difficulty).toBe('Advanced')
    expect(tracks.lon).toBe(175.402013)
    expect(tracks.lat).toBe(-36.212791)
    // expect(tracks.line).toBe(25)
    return null
  })
})

test('listTracks returns a list of all tracks', () => {
  return tracks.listTracks(testDb).then((tracks) => {
    expect(tracks).toHaveLength(20)
    return null
  })
})
//potentially revisit 'return' as the bool is a bit screwy and also fill in tracks.line
//

// test('addSavedTrack saves a track to the saved tracks list', () => {
//   return tracks.addSavedTrack(testDB)
// })

// test('addCompletedTrack adds an already saved track to the completed tracks list', () => {
//   return tracks.addCompletedTrack(testDB)
// })

// test('getSavedTrackByUser returns all the saved tracks for a user', () => {
//   return tracks.getSavedTrackByUser('1', testDB)
// })

// test('getCompletedTrackByUser returns all the completed tracks for a user', () => {
//   return tracks.getSavedTrackByUser('1', testDB)
// })
