const request = require('supertest')

const server = require('../server')
const db = require('../db/badges')
const dbUsers = require('../db/users')
// const auth0 = require('../routes/auth')
const log = require('../logger')

jest.mock('../logger')
jest.mock('../db/badges')
jest.mock('../db/users')
// jest.mock('../routes/auth')

// const mockUserGarden = {
//   id: 2,
//   name: 'Gardens 2',
//   address: '12 Hukanui Crescent',
//   description: 'Kelmarna Gardens is a city farm and ...',
//   lat: -36.86011508905973,
//   lon: 174.7330772002716,
//   url: 'http://www.kelmarnagardens.nz',
//   events: [
//     {
//       id: 1,
//       volunteersNeeded: 8,
//       title: 'Weeding Worker Bee',
//       date: 'Wed, 27 Sep 2020 20:00:00 GMT',
//       description: "It's time to get these weeds under control.",
//       volunteers: [
//         {
//           firstName: 'Sam',
//           userId: 3,
//         },
//         {
//           firstName: 'Steve',
//           userId: 4,
//         },
//       ],
//     },
//     {
//       id: 2,
//       volunteersNeeded: 19,
//       title: 'Rocking the Garden',
//       date: 'Wed, 26 Sep 2020 20:00:00 GMT',
//       description: "It's time to rock this garden!",
//       volunteers: [
//         {
//           firstName: 'Sam',
//           userId: 3,
//         },
//         {
//           firstName: 'Steve',
//           userId: 4,
//         },
//       ],
//     },
//   ],
// }

describe('GET /api/v1/badges', () => {
  it('responds with badge_data on res body', () => {
    db.getBadges.mockImplementation(() =>
      Promise.resolve([
        {
          id: 1,
          name: 'Honorary Busher',
          image: './images/bushwacker.jpg',
        },
        {
          id: 2,
          name: 'Mighty BushBaby',
          image: './images/bushbaby.jpg',
        },
      ])
    )
    return request(server)
      .get('/api/v1/badges')
      .expect('Content-Type', /json/)
      .expect(200)
      .then((res) => {
        expect(res.body).toHaveLength(2)
        return null
      })
  })

  it('responds with 500 and correct error object on DB error', () => {
    db.getBadges.mockImplementation(() =>
      Promise.reject(new Error('mock getBadges error'))
    )
    return request(server)
      .get('/api/v1/badges')
      .expect('Content-Type', /json/)
      .expect(500)
      .then((res) => {
        // expect(log).toHaveBeenCalledWith('mock getBadges error')
        console.log(res.body)
        expect(res.body.message).toBe('Unable to retrieve badges')
        return null
      })
  })
})

// describe('GET /api/v1/gardens/:id', () => {
//   it("responds with user's garden when user is Admin", () => {
//     // expect.assertions(2)
//     db.getGardenById.mockImplementation((id) => {
//       expect(id).toBe(2)
//       return Promise.resolve(mockUserGarden)
//     })
//     dbUsers.getUserById.mockImplementation(() =>
//       Promise.resolve({ auth0Id: 'auth0id|est' })
//     )
//     auth0.userHasAdminRole.mockImplementation(() => Promise.resolve(true))
//     return request(server)
//       .get('/api/v1/gardens/2')
//       .expect('Content-Type', /json/)
//       .expect(200)
//       .then((res) => {
//         expect(res.body.events).toHaveLength(2)
//         return null
//       })
//   })

//   it('responds with garden when token is not provided', () => {
//     expect.assertions(2)
//     db.getGardenById.mockImplementation((id) => {
//       expect(id).toBe(2)
//       return Promise.resolve(mockUserGarden)
//     })
//     return request(server)
//       .get('/api/v1/gardens/2')
//       .expect('Content-Type', /json/)
//       .expect(200)
//       .then((res) => {
//         expect(res.body.events).toHaveLength(2)
//         return null
//       })
//   })

//   it('responds with 500 and correct error object on DB error', () => {
//     db.getGardenById.mockImplementation(() =>
//       Promise.reject(new Error('mock getGardenById error'))
//     )
//     return request(server)
//       .get('/api/v1/gardens/999')
//       .expect('Content-Type', /json/)
//       .expect(500)
//       .then((res) => {
//         expect(log).toHaveBeenCalledWith('mock getGardenById error')
//         expect(res.body.error.title).toBe('Unable to retrieve garden')
//         return null
//       })
//   })

//   it('returns volunteers array if user is admin', () => {
//     const expected = [
//       {
//         firstName: 'Sam',
//         userId: 3,
//       },
//       {
//         firstName: 'Steve',
//         userId: 4,
//       },
//     ]

//     db.getGardenById.mockImplementation((id) => {
//       expect(id).toBe(2)
//       return Promise.resolve(mockUserGarden)
//     })

//     return request(server)
//       .get('/api/v1/gardens/2')
//       .expect('Content-Type', /json/)
//       .then((res) => {
//         expect(res.body.events[1].volunteers).toMatchObject(expected)
//         return null
//       })
//   })

//   it('includes isVolunteer in response if user is not admin', () => {
//     db.getGardenById.mockImplementation((id) => {
//       expect(id).toBe(2)
//       return Promise.resolve(mockUserGarden)
//     })
//     return request(server)
//       .get('/api/v1/gardens/2')
//       .expect('Content-Type', /json/)
//       .then((res) => {
//         expect(res.body.events[0]).toHaveProperty('isVolunteer')
//         return null
//       })
//   })
// })
