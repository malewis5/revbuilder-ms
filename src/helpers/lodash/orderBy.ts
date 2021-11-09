const orderBy = (array: any[], key: string, callback: any) => {
  if (callback) {
    return array.concat().sort(callback)
  }
  return array.concat().sort((a: any, b: any) => (a[key] > b[key] ? 1 : b[key] > a[key] ? -1 : 0))
}

export default orderBy
