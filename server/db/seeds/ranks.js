exports.seed = function (knex) {
  return knex('ranks')
    .del()
    .then(function () {
      return knex('ranks').insert([
        {
          xp: 500,
          rank_name: 'Bush Novice I',
          rank_number: 1,
        },
        {
          xp: 1100,
          rank_name: 'Bush Novice II',
          rank_number: 2,
        },
        {
          xp: 1800,
          rank_name: 'Bush Novice III',
          rank_number: 3,
        },
        {
          xp: 2600,
          rank_name: 'Bush Apprentice I',
          rank_number: 4,
        },
        {
          xp: 3500,
          rank_name: 'Bush Apprentice II',
          rank_number: 5,
        },
        {
          xp: 4500,
          rank_name: 'Bush Apprentice III',
          rank_number: 6,
        },
        {
          xp: 5600,
          rank_name: 'Bush Adept I',
          rank_number: 7,
        },
        {
          xp: 6800,
          rank_name: 'Bush Adept II',
          rank_number: 8,
        },
        {
          xp: 8100,
          rank_name: 'Bush Adept III',
          rank_number: 9,
        },
        {
          xp: 9500,
          rank_name: 'Bush Expert I',
          rank_number: 10,
        },
        {
          xp: 11000,
          rank_name: 'Bush Expert II',
          rank_number: 11,
        },
        {
          xp: 12600,
          rank_name: 'Bush Expert III',
          rank_number: 12,
        },
        {
          xp: 14300,
          rank_name: 'Bush Master I',
          rank_number: 13,
        },
        {
          xp: 16100,
          rank_name: 'Bush Master II',
          rank_number: 14,
        },
        {
          xp: 18000,
          rank_name: 'Bush Master III',
          rank_number: 15,
        },
        {
          xp: 20000,
          rank_name: 'Bush Legend I',
          rank_number: 16,
        },
        {
          xp: 22100,
          rank_name: 'Bush Legend II',
          rank_number: 17,
        },
        {
          xp: 24300,
          rank_name: 'Bush Legend III',
          rank_number: 18,
        },
        {
          xp: 26600,
          rank_name: 'Bush Lord I',
          rank_number: 19,
        },
        {
          xp: 29000,
          rank_name: 'Bush Lord II',
          rank_number: 20,
        },
        {
          xp: 31500,
          rank_name: 'Bush Lord III',
          rank_number: 21,
        },
        {
          xp: 34100,
          rank_name: 'Bush Royalty I',
          rank_number: 22,
        },
        {
          xp: 36800,
          rank_name: 'Bush Royalty II',
          rank_number: 23,
        },
        {
          xp: 39600,
          rank_name: 'Bush Royalty III',
          rank_number: 24,
        },
        {
          xp: 42500,
          rank_name: 'Bush God',
          rank_number: 25,
        },
      ])
    })
}
