import { AxiosRequestConfig, AxiosResponse } from '../types'

export class AxiosError extends Error {
  isAxiosError: boolean
  config: AxiosRequestConfig
  code?: string | number
  request?: any
  response?: AxiosResponse

  constructor(
    message: string,
    config: AxiosRequestConfig,
    code?: string | number,
    request?: any,
    response?: AxiosResponse
  ) {
    super(message)
    this.config = config
    this.code = code
    this.request = request
    this.response = response
    this.isAxiosError = true

    // 解决ts的一个坑
    // https://github.com/microsoft/TypeScript-wiki
    // https://github.com/microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md
    // 当继承一些内置对象的时候，不做处理的话，定义的方法无法调用
    Object.setPrototypeOf(this, AxiosError.prototype)
  }
}

// 工厂函数创建
export function createError(
  message: string,
  config: AxiosRequestConfig,
  code?: string | number,
  request?: any,
  response?: AxiosResponse
) {
  const error = new AxiosError(message, config, code, request, response)
  return error
}
