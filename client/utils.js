export function truncatedName(str) {
  return str.length > 20 ? str.slice(0, 20 - 1) + '…' : str
}

export function randomNumGenForImage() {
  return Math.floor(Math.random() * 14) + 1
}

export function capitaliseFirstLetter(str) {
  return str
    .split(' ')
    .map((name) => name.charAt(0).toUpperCase() + name.slice(1).toLowerCase())
    .join(' ')
}
