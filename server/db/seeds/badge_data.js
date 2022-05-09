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
        {
          id: 2,
          name: 'Honorary Busher',
          image: './images/bushwacker.jpg',
        },
        {
          id: 3,
          name: 'Honorary Busher',
          image: './images/bushwacker.jpg',
        },
        {
          id: 4,
          name: 'Honorary Busher',
          image: './images/bushwacker.jpg',
        },
        {
          id: 5,
          name: 'Honorary Busher',
          image: './images/bushwacker.jpg',
        },
        {
          id: 6,
          name: 'Honorary Busher',
          image: './images/bushwacker.jpg',
        },
        {
          id: 7,
          name: 'Honorary Busher',
          image: './images/bushwacker.jpg',
        },
        {
          id: 8,
          name: 'Honorary Busher',
          image: './images/bushwacker.jpg',
        },
        {
          id: 9,
          name: 'Honorary Busher',
          image: './images/bushwacker.jpg',
        },
        {
          id: 10,
          name: 'Honorary Busher',
          image: './images/bushwacker.jpg',
        },
        {
          id: 11,
          name: 'Honorary Busher',
          image: './images/bushwacker.jpg',
        },
        {
          id: 12,
          name: 'Honorary Busher',
          image: './images/bushwacker.jpg',
        },
        {
          id: 13,
          name: 'Honorary Busher',
          image: './images/bushwacker.jpg',
        },
        {
          id: 14,
          name: 'Honorary Busher',
          image: './images/bushwacker.jpg',
        },
        {
          id: 15,
          name: 'Honorary Busher',
          image: './images/bushwacker.jpg',
        },
        {
          id: 16,
          name: 'Honorary Busher',
          image: './images/bushwacker.jpg',
        },
        {
          id: 17,
          name: 'Honorary Busher',
          image: './images/bushwacker.jpg',
        },
        {
          id: 18,
          name: 'Honorary Busher',
          image: './images/bushwacker.jpg',
        },
        {
          id: 19,
          name: 'Honorary Busher',
          image: './images/bushwacker.jpg',
        },
        {
          id: 20,
          name: 'Honorary Busher',
          image: './images/bushwacker.jpg',
        },
      ])
    })
}
