exports.seed = function (knex) {
  return knex('badge_data')
    .del()
    .then(function () {
      return knex('badge_data').insert([
        {
          id: 1,
          name: 'Baby Genius Award',
          image: 'baby-genius',
        },
        {
          id: 2,
          name: "Hero's Journey",
          image: 'hero-journey',
        },
        {
          id: 3,
          name: 'Renaissance Person',
          image: 'renaissance-person',
        },
        {
          id: 4,
          name: 'Truly a Might Bush',
          image: 'mighty-bush',
        },
        {
          id: 5,
          name: 'Overachiever',
          image: 'overachiever',
        },
        {
          id: 6,
          name: "It's not a competition",
          image: 'its-not-a-comp',
        },
        {
          id: 7,
          name: 'Here we go again',
          image: 'here-we-go',
        },
        {
          id: 8,
          name: "Aren't you bored?",
          image: 'arent-you-bored',
        },
        {
          id: 9,
          name: 'Tic-Tac-Toe',
          image: 'tic-tac-toe',
        },
        {
          id: 10,
          name: 'Daniel Birdman',
          image: 'birdman',
        },
        {
          id: 11,
          name: 'The Behemoth',
          image: 'behemoth',
        },
        {
          id: 12,
          name: 'Island Time',
          image: 'island-time',
        },
        {
          id: 13,
          name: 'Big Plans',
          image: 'big-plans',
        },
        {
          id: 14,
          name: 'Big Plans Paid Off',
          image: 'big-plans-paid-off',
        },
        {
          id: 15,
          name: 'Big fish, little pond',
          image: 'big-fish',
        },
        {
          id: 16,
          name: 'Think you can tramp?',
          image: 'think-you-can-tramp?',
        },
        {
          id: 17,
          name: 'Calves of Mithril',
          image: 'calves-of-mithril',
        },
        {
          id: 18,
          name: 'Stupid Baby',
          image: 'stupid-baby',
        },
      ])
    })
}
