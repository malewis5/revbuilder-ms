import { filter, findIndex } from '.'

const remove = (targetArray: any[], callbackOrParam: any) => {
  const filtered: any[] = filter(targetArray, callbackOrParam)
  if (filtered.length > 0) {
    const targetItem: any = filtered[0]
    const targetIndex: number = findIndex(targetArray, (item: any) => {
      return item === targetItem
    })
    if (targetIndex !== -1) {
      return targetArray.slice(0, targetIndex).concat(targetArray.slice(targetIndex + 1, targetArray.length))
    }
  }
  return targetArray
}

export default remove
