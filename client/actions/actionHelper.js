import {
  getUserTracks,
  getUserBadges,
  getAllBadges,
} from '../components/user/userHelper'
import requestor from '../consume'

export function getCurrentDateString() {
  const current = new Date()
  return `${
    current.getMonth() + 1
  }/${current.getDate()}/${current.getFullYear()}`
}

// checks for new badges, awards them to users and tells modal the badges achived + details
export async function checkForNewBadges(userId) {
  const tracks = await getUserTracks(userId)
  const badgesData = await getAllBadges()

  // get the tracks a user has completed
  const completedTracks = tracks.filter((track) => track.completed)
  const newBadges = badgeChecks(completedTracks, tracks)
  const badgesToAdd = await getBadgesToAdd(newBadges, userId)

  addBadgesToDb(userId, badgesToAdd)

  const badgesToAddData = badgesData.filter((badge) =>
    badgesToAdd.includes(badge.id)
  )

  return badgesToAddData
}

// creates request to add user's new badges to the db
export function addBadge(userId, badgeId, consume = requestor) {
  return consume(`/badges`, 'post', { userId, badgeId })
    .then((res) => {
      return res.body
    })
    .catch((error) => {
      console.log(error.message)
    })
}

// get the badges the user already has achieived
async function getExisintingbadges(userId) {
  const userBadges = await getUserBadges(userId)
  const existingBadges = userBadges.map((badge) => badge.id)
  return existingBadges
}

// checks which badges the user already has against what they badges they should have then just returns the newly eared badges
async function getBadgesToAdd(newBadges, userId) {
  const existingBadges = await getExisintingbadges(userId)
  const badgesToAdd = newBadges.filter((badgeId) => {
    return !existingBadges.includes(badgeId)
  })

  return badgesToAdd
}

// awards new badges to user in the badges table
function addBadgesToDb(userId, badgesToAdd) {
  badgesToAdd.map(async (badgeId) => await addBadge(userId, badgeId))
}

// get the badges the user meets the criteria for
function badgeChecks(completedTracks, tracks) {
  const newBadges = []
  const difficulties = ['Easy', 'Intermediate', 'Advanced']

  let difficultiesCompletedCounter = 0

  // BADGES 1,2 and 3
  // checks whether a user has completed a track for each difficulty
  difficulties.map((difficulty, index) => {
    const completedDifficultyTracks = completedTracks.filter(
      (track) => track.difficulty === difficulty
    )

    // if has achieved track of this difficulty then award has walked a track of this difficulty (i.e. easy) badge
    if (completedDifficultyTracks.length > 0) {
      newBadges.push(index + 1) // index + 1 should be id of badge

      // records if has completed track of this difficulty
      difficultiesCompletedCounter++
    }
  })

  // BADGE 4
  // if had completed one track of each difficulty (one easy, one intermediate, one hard)
  if (difficultiesCompletedCounter === 3) {
    newBadges.push(4)
  }

  // BADGE 5
  // check if all tracks completed
  if (completedTracks.length === tracks.length) {
    newBadges.push(5)
  }

  // BADGE 8
  //check if track has been walked twice
  const tracksCompletedTwice = completedTracks.filter(
    (track) => track.totalCompletions > 1
  )
  if (tracksCompletedTwice.length > 0) {
    newBadges.push(8)
  }

  // BADGE 9
  //check if track has been walked ten times
  const tracksCompletedTenTimes = completedTracks.filter(
    (track) => track.totalCompletions > 9
  )
  if (tracksCompletedTenTimes.length > 0) {
    newBadges.push(9)
  }

  // BADGE 11
  // check if user has walked kaitoke hot springs
  const kaitokeHotSpringsTrack = completedTracks.filter(
    (track) => track.id === 11
  )
  if (kaitokeHotSpringsTrack.length > 0) {
    newBadges.push(11)
  }

  // BADGE 12
  // check if user has walked Aotea Track
  const aoteaTrack = completedTracks.filter((track) => track.id === 1)
  if (aoteaTrack.length > 0) {
    newBadges.push(12)
  }

  // BADGE 13
  // check if user has walked a track on an island
  const islandTracksIds = [1, 2, 11, 12, 6]
  const islandTracks = completedTracks.filter((track) =>
    islandTracksIds.includes(track.id)
  )
  if (islandTracks.length > 0) {
    newBadges.push(13)
  }

  // BADGE 15
  // check if user has walked a track on an island
  if (completedTracks.length > 9) {
    newBadges.push(15)
  }

  // BADGES 16, 17 and 18
  // Check if a user has completed all tracks of that difficulty
  difficulties.map((difficulty, index) => {
    const completedDifficultyTracks = completedTracks.filter(
      (track) => track.difficulty === difficulty
    )
    const allDifficultyTracks = tracks.filter(
      (track) => track.difficulty === difficulty
    )

    if (completedDifficultyTracks.length === allDifficultyTracks.length) {
      newBadges.push(index + 16) // should be id of badge (16, 17, 18)
    }
  })
  return newBadges
}
