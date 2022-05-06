
function generateUserTrackDataSeed() {
  // creates the seed data for user_tracks
  // seed data is a row for each combination of user_id and track_id with completed and saved set to zero (false)
  // e.g. for 2 users and three tracks
  // [{user_id: 1, track_id: 1, ...}, {user_id: 1, track_id: 2, ...}, {user_id: 1, track_id: 3, ...},
  //  {user_id: 2, track_id: 1, ...},{user_id: 2, track_id: 2, ...}, {user_id: 2, track_id: 3, ...}]

  const amountOfUsers = 2
  const amountOfTracks = 20

  const userTracks = []

  for (let i = 1; i < amountOfUsers + 1; i++) {
    for (let j = 1; j < amountOfTracks + 1; j++) {
      userTracks.push({
        user_id: i,
        track_id: j,
        completed: 0,
        saved: 0,
      })
    }
  }
}

module.exports = {
  generateUserTrackDataSeed,
}
