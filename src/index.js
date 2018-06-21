import {isObject, isFunction, isBoolean} from './type-checkers'

function classNameConcat (...classnames) {
  return classnames.reduce((acc, current) => {
    if (typeof current === 'string') {
      return `${acc} ${current}`
    } else if (isObject(current)) {
      const names = Object.keys(current).reduce((acc, key) => {
        const val = current[key]

        if (isBoolean(val) && val) {
          return `${acc} ${key}`
        } else if (isFunction(val)) {
          return `${acc}${val() ? ` ${key}` : ''}`
        }

        return `${acc} ${classNameConcat(val)}`
      }, '')
      return `${acc} ${names}`
    } else if (isFunction(current)) {
      return `${acc} ${current()}`
    } else if (Array.isArray(current)) {
      return `${acc} ${classNameConcat(...current)}`
    }

    return acc
  }, '').replace(/\s{1,}/g, ' ').trim()
}

export default classNameConcat
