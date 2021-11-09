import { isFunction } from '.'

const filter = (arr: any[] | undefined | null, callback: any) => {
  if (arr) {
    if (isFunction(callback)) {
      return arr.filter(callback)
    }
    return arr.filter((item: any) => {
      let isOkay: boolean = true
      for (const key in callback) {
        if (callback[key]) {
          if (item[key] !== callback[key]) {
            isOkay = false
          }
        }
      }
      return isOkay
    })
  }
  return []
}

export default filter
