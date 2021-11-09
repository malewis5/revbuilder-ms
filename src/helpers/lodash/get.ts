const get = (obj: any | undefined | null, map: string) => {
  try {
    if (obj) {
      const split = map.split('.')
      let targetBase: any = obj[split[0]]
      if (split.length > 1) {
        for (let i: number = 1; i < split.length; i++) {
          if (targetBase) {
            targetBase = targetBase[split[i]]
          }
        }
      }
      return targetBase
    }
    return undefined
  } catch (e) {
    return undefined
  }
}

export default get
