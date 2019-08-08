const toString = Object.prototype.toString

// val is Date：使用类型保护(谓词保护)
// 这样写的话，在使用的时候就会有对应的类型进行代码提示
export function isDate(val: any): val is Date {
  return toString.call(val) === '[object Date]'
}

export function isObject(val: any): val is Object {
  return val !== null && typeof val === 'object'
}

// 普通对象的判断方法
export function isPlainObject(val: any): val is Object {
  return toString.call(val) === '[object Object]'
}
