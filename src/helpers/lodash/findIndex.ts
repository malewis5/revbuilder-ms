import { find } from './'
const findIndex = (arr: any[], something: any) => {
  const obj: any = find(arr, something)
  if (obj) {
    return arr.findIndex((o: any) => {
      return o === obj
    })
  }
  return -1
}

export default findIndex
