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

// 交叉类型
export function extend<T, U>(to: T, from: U): T & U {
  for (const key in from) {
    ;(to as T & U)[key] = from[key] as any
  }
  return to as T & U
}

export function deepMerge(...objs: any[]): any {
  // 深拷贝：使用了递归方式，对参数做循环
  const result = Object.create(null)
  objs.forEach(obj => {
    if (obj) {
      Object.keys(obj).forEach(key => {
        const val = obj[key]
        // 对象遍历之后还是一个对象，使用递归
        if (isPlainObject(val)) {
          if (isPlainObject(result[key])) {
            result[key] = deepMerge(result[key], val)
          } else {
            result[key] = deepMerge(val)
          }
        } else {
          result[key] = val
        }
      })
    }
  })
  return result
}
