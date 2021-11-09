const sortBy = (array: any[] | undefined | null, key: string, callback?: any) => {
  if (array) {
    if (callback) {
      return array.concat().sort(callback)
    }
    return array.concat().sort((a: any, b: any) => (a[key] > b[key] ? 1 : b[key] > a[key] ? -1 : 0))
  }
  return []
}

export default sortBy
