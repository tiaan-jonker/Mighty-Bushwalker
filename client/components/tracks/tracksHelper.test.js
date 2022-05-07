// import { getAllTracks } from './tracksHelper'

// describe('getAllTracks', () => {
//   it('returns correct tracks array', () => {
//     function consume() {
//       return Promise.resolve({
//         body: {
//           tracks: [
//             {
//               asset_id: 'd2f000ee-fdeb-49b6-a53c-de537a3c4aed',
//               name: 'Burrill Route',
//               days: 1,
//               hours: 9,
//               length: 16,
//               return: true,
//               difficulty: 'Advanced',
//               lon: 175.388984,
//               lat: -36.095533,
//               line: `[
//                 [
//                   [175.403896, -36.118319],
//                   [175.40277, -36.118639],
//                   [175.401823, -36.118586],
//                   [175.401406, -36.117987],
//                 ]
//               ]`,
//             },
//           ],
//         },
//       })
//     }
//     return getAllTracks(consume).then((tracks) => {
//       console.log(tracks)
//       expect(tracks[0].name).toBe('Burrill Route')
//     })
//   })
// })
