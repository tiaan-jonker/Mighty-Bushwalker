import { getUserTracks } from '../components/user/userHelper'

export function getCurrentDateString() {
  const current = new Date()
  return `${
    current.getMonth() + 1
  }/${current.getDate()}/${current.getFullYear()}`
}

export async function checkForNewBadges(userId) {
  const tracks = await getUserTracks(userId)
  // get existing badges
  const newBadges = []

  const completedTracks = tracks.filter((track) => track.completed)

  console.log(completedTracks)
  console.log(tracks)

  const difficulties = ['Easy', 'Intermediate', 'Advanced']

  let difficultiesCompleted = 0

  difficulties.map((difficulty, index) => {
    const completedDifficultyTracks = completedTracks.filter(
      (track) => track.difficulty === difficulty
    )

    if (completedDifficultyTracks.length > 0) {
      newBadges.push(index + 1) // should be id of badge

      difficultiesCompleted++
    }
  })

  if (difficultiesCompleted === 3) {
    newBadges.push(4)
  }

  if (completedTracks.length === tracks.length) {
    newBadges.push(5)
  }

  const tracksCompletedTwice = completedTracks.filter(
    (track) => track.total_completions > 1
  )

  if (tracksCompletedTwice.length > 0) {
    newBadges.push(8)
  }

  const tracksCompletedTenTimes = completedTracks.filter(
    (track) => track.total_completions > 9
  )

  if (tracksCompletedTenTimes.length > 0) {
    newBadges.push(9)
  }

  const kaitokeHotSpringsTrack = completedTracks.filter(
    (track) => track.id === 11
  )

  if (kaitokeHotSpringsTrack.length > 0) {
    newBadges.push(11)
  }

  const aoteaTrack = completedTracks.filter((track) => track.id === 1)

  if (aoteaTrack.length > 0) {
    newBadges.push(12)
  }

  const islandTracksIds = [1, 2, 11, 12, 6]

  const islandTracks = completedTracks.filter((track) =>
    islandTracksIds.includes(track.id)
  )

  if (islandTracks.length > 0) {
    newBadges.push(13)
  }

  if (completedTracks.length > 9) {
    newBadges.push(15)
  }

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

  console.log(newBadges)
}
