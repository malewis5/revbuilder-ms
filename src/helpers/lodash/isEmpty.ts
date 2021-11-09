function isEmpty(obj: { [x: string]: any }) {
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      return false
    }
  }
  return true
}

export default isEmpty
