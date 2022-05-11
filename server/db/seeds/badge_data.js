exports.seed = function (knex) {
  return knex('badge_data')
    .del()
    .then(function () {
      return knex('badge_data').insert([
        {
          id: 1,
          name: 'Stupid Baby Award',
          image: 'stupid-baby',
          criteria: 'First beginner track',
        },
        {
          id: 2,
          name: 'Baby Genius Award',
          image: 'baby-genius',
          criteria: 'First intermediate track',
        },
        {
          id: 3,
          name: "Hero's Journey",
          image: 'hero-journey',
          criteria: 'First expert track',
        },
        {
          id: 4,
          name: 'Renaissance Person',
          image: 'renaissance-person',
          criteria: 'One of each difficulty',
        },
        {
          id: 5,
          name: 'Truly a Might Bush',
          image: 'mighty-bush',
          criteria: 'All tracks completed',
        },
        {
          id: 6,
          name: 'Overachiever',
          image: 'overachiever',
          criteria: 'Two in one day',
        },
        {
          id: 7,
          name: "It's not a competition",
          image: 'its-not-a-comp',
          criteria: 'Three in one day',
        },
        {
          id: 8,
          name: 'Here we go again',
          image: 'here-we-go',
          criteria: 'Walked track a second time',
        },
        {
          id: 9,
          name: "Aren't you bored?",
          image: 'arent-you-bored',
          criteria: 'Walked track 10 times',
        },
        {
          id: 10,
          name: 'Tic-Tac-Toe',
          image: 'tic-tac-toe',
          criteria: 'Complete 3 Walks in 3 Days',
        },
        {
          id: 11,
          name: 'Daniel Birdman',
          image: 'birdman',
          criteria: 'Well known birdwatching track completed',
        },
        {
          id: 12,
          name: 'The Behemoth',
          image: 'behemoth',
          criteria: 'Walk the mighty Aotea Track',
        },
        {
          id: 13,
          name: 'Island Time',
          image: 'island-time',
          criteria: 'Completed a track on an island',
        },
        {
          id: 14,
          name: 'Big Plans',
          image: 'big-plans',
          criteria: 'Put 10 tracks in your saved tracks',
        },
        {
          id: 15,
          name: 'Big Plans Paid Off',
          image: 'big-plans-paid-off',
          criteria: 'Complete 10 tracks',
        },
        {
          id: 16,
          name: 'Big fish, little pond',
          image: 'big-fish',
          criteria: 'Complete all easy tracks',
        },
        {
          id: 17,
          name: 'Think you can tramp?',
          image: 'think-you-can-tramp',
          criteria: 'Complete all intermediate tracks',
        },
        {
          id: 18,
          name: 'Calves of Mithril',
          image: 'calves-of-mithril',
          criteria: 'Complete all expert tracks',
        },
      ])
    })
}
