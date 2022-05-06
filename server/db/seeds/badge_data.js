exports.seed = function (knex) {
  return knex('badge_data')
    .del()
    .then(function () {
      return knex('badge_data').insert([
        {
          id: 1,
          name: 'Honorary Busher',
          image: './images/bushwacker.jpg',
        },
      ])
    })
}
