const knex = require('knex')
const config = require('./knexfile').test
const testDb = knex(config)

const db = require('./ranks')

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

test('all ranks', () => {
  return db.listRanks(testDb).then((ranks) => {
    expect(ranks).toHaveLength(25)
    return null
  })
})
