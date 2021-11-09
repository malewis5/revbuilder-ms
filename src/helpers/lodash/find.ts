import { isFunction } from '.'

const find = (arr: any | undefined | null, callback: any) => {
  const targetArray: any[] = Array.isArray(arr) ? arr : Object.values(arr)
  if (targetArray) {
    if (isFunction(callback)) {
      return targetArray.find(callback)
    }
    return targetArray.find((item: any) => {
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
  return undefined
}
export default find
