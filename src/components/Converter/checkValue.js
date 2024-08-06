export const checkValue = (value) => {
  if (value[0] !== '#') return false
  if (value.length > 7) return false
  if (value.substr(1).match(/[^0-9a-f]/gi)) return false
  return true
}

export default checkValue
