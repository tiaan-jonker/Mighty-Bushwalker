const knex = require('knex')
const config = require('./knexfile').test
const testDb = knex(config)

const db = require('./tracks')

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

// test('getTrackById returns the correct track', () => {
//   return tracks.getTrackById('1', testDb).then((tracks) => {
//     expect(tracks.assetId).toBe('2ae1915a-4d05-4e10-9d26-7a552c4ac41f')
//     expect(tracks.name).toBe('Aotea Track')
//     expect(tracks.days).toBe(3)
//     expect(tracks.hours).toBe(14.5)
//     expect(tracks).toHaveLength(25)
//     expect(tracks.return).toBe(0)
//     expect(tracks.difficulty).toBe('Advanced')
//     expect(tracks.lon).toBe(175.402013)
//     expect(tracks.lat).toBe(-36.212791)
//     // expect(tracks.line).toBe(25)
//     return null
//   })
// })

// test('listTracks returns a list of all tracks', () => {
//   return db.getUserTrackByUser(1, testDb).then((tracks) => {
//     console.log(tracks)
//     expect(tracks).toHaveLength(20)
//     return null
//   })
// })

test('save a track in db', () => {
  return db
    .updateSavedStatus({ userId: 1, trackId: 1, status: 1 }, testDb)
    .then(() => {
      return testDb('user_tracks').where({ user_id: 1, track_id: 1 }).first()
    })
    .then((track) => {
      expect(track.saved).toBe(1)
      return null
    })
})

test('set hiking to 0', () => {
  return db
    .updateHikingStatus({ userId: 1, trackId: 1, status: 0 }, testDb)
    .then(() => {
      return testDb('user_tracks').where({ user_id: 1, track_id: 1 }).first()
    })
    .then((track) => {
      expect(track.saved).toBe(0)
      return null
    })
})

test('set hiking to 1', () => {
  return db
    .updateHikingStatus({ userId: 1, trackId: 1, status: 1 }, testDb)
    .then(() => {
      return testDb('user_tracks').where({ user_id: 1, track_id: 1 }).first()
    })
    .then((track) => {
      expect(track.hiking).toBe(1)
      return null
    })
})

test('set all hiking to 0', () => {
  return db
    .resetUserHikingStatus({ userId: 1 }, testDb)
    .then(() => {
      return testDb('user_tracks').where({ user_id: 1 }).select()
    })
    .then((tracks) => {
      tracks.map((track) => expect(track.hiking).toBe(0))

      return null
    })
})

test('that we can add xp', () => {
  return db
    .addXp(1, 200, testDb)
    .then(() => {
      return testDb('users').where({ id: 1 }).first()
    })
    .then((user) => {
      expect(user.xp).toBe(1200)

      return null
    })
})

test('update completed status', () => {
  return db
    .updateCompletedStatus(
      { userId: 1, trackId: 1, status: 1, lastCompletion: '5/9/2022' },
      testDb
    )
    .then(() => {
      return testDb('user_tracks').where({ user_id: 1, track_id: 1 }).first()
    })
    .then((track) => {
      expect(track.completed).toBe(1)
      expect(track.last_completion).toBe('5/9/2022')
      expect(track.total_completions).toBe(1)

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
