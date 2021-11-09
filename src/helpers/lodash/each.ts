interface ILoopObject {
  [x: string]: any
}

/**
 * Lodash drop-in replacement
 * @param obj
 * @param callback
 */
const each = (obj: any[] | ILoopObject | undefined | null, callback: any) => {
  if (obj) {
    if (Array.isArray(obj)) {
      let i: number = 0
      obj.forEach((item: any) => {
        callback(item, i)
        i++
      })
    } else {
      for (const key in obj) {
        if (obj[key] != null && typeof obj[key] !== undefined) {
          callback(obj[key], key)
        } else if (obj[key] === null) {
          callback(null, key)
        } else if (obj[key] === undefined) {
          callback(undefined, key)
        }
      }
    }
  }
}

export default each
