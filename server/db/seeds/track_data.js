exports.seed = function (knex) {
  return knex('track_data')
    .del()
    .then(function () {
      return knex('track_data').insert([
        {
          id: 1,
          name: 'Henderson Bush Creek',
          length: 5,
          duration: '2 Hours',
          route_type: 'Trail',
          location: 'Henderson Valley',
          location_coords: '[34.14141, -34.43222]',
        },
      ])
    })
}
