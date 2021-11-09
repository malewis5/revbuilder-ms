const isFunction = (functionToCheck: any) => {
  return functionToCheck && {}.toString.call(functionToCheck) === '[object Function]'
}

import chunk from './chunk'
import each from './each'
import filter from './filter'
import find from './find'
import orderBy from './orderBy'
import findIndex from './findIndex'
import remove from './remove'
import sortBy from './sortBy'
import values from './values'
import defaults from './defaults'
import get from './get'
import asObject from './asObject'
import has from './has'
import isEmpty from './isEmpty'

export {
  sortBy,
  isEmpty,
  has,
  values,
  each,
  asObject,
  filter,
  find,
  orderBy,
  findIndex,
  remove,
  chunk,
  isFunction,
  get,
  defaults,
}
