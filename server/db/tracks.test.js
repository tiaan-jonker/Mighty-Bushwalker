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
//potentially revisit 'return' and also fill in tracks.line
//

//
// describe('getGardenById', () => {
//   it('returns the chosen garden, with events mapped correctly', () => {
//     return db.getGardenById(2, testDb).then((garden) => {
//       expect(garden.id).toBe(2)
//       expect(garden.name).toBe('Kingsland Community Orchard')
//       expect(garden.events).toHaveLength(7)
//       const event = garden.events[1]
//       expect(event.id).toBe(2)
//       expect(event.volunteersNeeded).toBe(24)
//       expect(event.volunteers).toHaveLength(3)
//       return null
//     })
//   })
//   it('returns the chosen garden, with empty events array when no events', () => {
//     return db.getGardenById(3, testDb).then((garden) => {
//       expect(garden.id).toBe(3)
//       expect(garden.name).toBe('Devonport Community Garden')
//       expect(garden.events).toHaveLength(0)
//       return null
//     })
//   })
// })

// describe('getGardens', () => {
//   it('returns the correct number of gardens', () => {
//     return db.getGardens(testDb).then((gardens) => {
//       expect(gardens).toHaveLength(5)
//       return null
//     })
//   })
// })
