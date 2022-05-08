export function truncatedName(str) {
  return str.length > 20 ? str.slice(0, 20 - 1) + '…' : str
}
