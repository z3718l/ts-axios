// 传入参数数据进行转换

import { isPlainObject } from './util'
export function transformRequest(data: any): any {
  if (isPlainObject(data)) {
    return JSON.stringify(data)
  }
  return data
}
