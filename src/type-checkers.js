export function isObject (val) {
  return val !== null & Object.prototype.toString.call(val) === '[object Object]'
}

export function isBoolean (val) {
  return typeof val === 'boolean'
}

export function isFunction (val) {
  return Object.prototype.toString.call(val) === '[object Function]'
}
