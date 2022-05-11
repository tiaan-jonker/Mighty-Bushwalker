export function playTheme(input) {
  const audio1 = new Audio('/music/mighty_bush_theme.mp3')
  const audio2 = new Audio('/music/badge_earned.mp3')
  const audio3 = new Audio('/music/Burrell Route.mp3')

  switch (input) {
    case 1:
      audio1.play().catch((err) => {
        console.err(err)
      })
      break
    case 2:
      audio2.play().catch((err) => {
        console.err(err)
      })
      break
    default:
      audio3.play().catch((err) => {
        console.err(err)
      })
  }
}
