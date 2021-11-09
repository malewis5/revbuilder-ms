const defaults = (target: any | undefined | null, ...sources: any[]) => {
  if (sources && Array.isArray(sources)) {
    sources.forEach((sourceObj: any) => {
      if (sourceObj) {
        Object.keys(sourceObj).forEach((sourceProp: string) => {
          if (!target.hasOwnProperty(sourceProp)) {
            target[sourceProp] = sourceObj[sourceProp]
          }
        })
      }
    })
    return target
  }
  return target
}
export default defaults
