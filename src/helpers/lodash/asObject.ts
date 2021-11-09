const asObject = (str: string | undefined | null): any | null => {
  if (str) {
    if (typeof str === 'string') {
      return JSON.parse(unescape(str))
    }
  }
  return null
}

export default asObject
