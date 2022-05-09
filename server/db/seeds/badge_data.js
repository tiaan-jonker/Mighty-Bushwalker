exports.seed = function (knex) {
  return knex('badge_data')
    .del()
    .then(function () {
      return knex('badge_data').insert([
        {
          id: 1,
          name: 'Baby Genius Award',
          image: 'baby-genius',
          criteria: 'First beginner track',
        },
        {
          id: 2,
          name: "Hero's Journey",
          image: 'hero-journey',
          criteria: 'First intermediate track',
        },
        {
          id: 3,
          name: 'Renaissance Person',
          image: 'renaissance-person',
          criteria: 'First expert track',
        },
        {
          id: 4,
          name: 'Truly a Might Bush',
          image: 'mighty-bush',
          criteria: 'One of each difficulty',
        },
        {
          id: 5,
          name: 'Overachiever',
          image: 'overachiever',
          criteria: 'All tracks completed',
        },
        {
          id: 6,
          name: "It's not a competition",
          image: 'its-not-a-comp',
          criteria: 'Two in one day',
        },
        {
          id: 7,
          name: 'Here we go again',
          image: 'here-we-go',
          criteria: 'Three in one day',
        },
        {
          id: 8,
          name: "Aren't you bored?",
          image: 'arent-you-bored',
          criteria: 'Walked track a second time',
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
          criteria: 'Walked track 10 times',
        },
        {
          id: 11,
          name: 'The Behemoth',
          image: 'behemoth',
          criteria: 'Completed 3 walks in 3 days',
        },
        {
          id: 12,
          name: 'Island Time',
          image: 'island-time',
          criteria: 'Well known birdwatching track completed',
        },
        {
          id: 13,
          name: 'Big Plans',
          image: 'big-plans',
          criteria: 'Put 10 tracks in your saved tracks',
        },
        {
          id: 14,
          name: 'Big Plans Paid Off',
          image: 'big-plans-paid-off',
          criteria: 'Complete 10 tracks',
        },
        {
          id: 15,
          name: 'Big fish, little pond',
          image: 'big-fish',
          criteria: 'Complete all easy tracks',
        },
        {
          id: 16,
          name: 'Think you can tramp?',
          image: 'Think-you-can-tramp?',
          criteria: 'Complete all intermediate tracks',
        },
        {
          id: 17,
          name: 'Calves of Mithril',
          image: 'calves-of-mithril',
          criteria: 'Complete all expert tracks',
        },
        {
          id: 18,
          name: 'Stupid Baby',
          image: 'stupid-baby',
          criteria: 'First beginner track',
        },
      ])
    })
}
