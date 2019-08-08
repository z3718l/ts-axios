import { request } from 'https'
import { timeouts } from 'retry'
import { config, head } from 'shelljs'

export type Method =
  | 'get'
  | 'Get'
  | 'dellete'
  | 'DELETE'
  | 'head'
  | 'HEAD'
  | 'options'
  | 'OPTIONS'
  | 'post'
  | 'POST'
  | 'put'
  | 'PUT'
  | 'patch'
  | 'PATCH'

export interface AxiosRequestConfig {
  url?: string
  method?: Method
  data?: any
  params?: any
  headers?: any
  responseType?: XMLHttpRequestResponseType
  timeout?: number
}

// 定义数据返回格式的接口（约束数据返回格式）
export interface AxiosResponse {
  data: any
  status: number
  statusText: string
  headers: any
  config: AxiosRequestConfig
  request: any
}

// axios返回类型
export interface AxiosPromise extends Promise<AxiosResponse> {}

// 错误详情
export interface AxiosError extends Error {
  isAxiosError: boolean
  config: AxiosRequestConfig
  code?: string | number
  request?: any
  response?: AxiosResponse
}

// 定义接口类型
export interface Axios {
  request(config: AxiosRequestConfig): AxiosPromise
  get(url: string, config?: AxiosRequestConfig): AxiosPromise
  delete(url: string, config?: AxiosRequestConfig): AxiosPromise
  head(url: string, config?: AxiosRequestConfig): AxiosPromise
  options(url: string, config?: AxiosRequestConfig): AxiosPromise

  post(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise
  put(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise
  patch(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise
}
// 混合对象（混合接口）
export interface AxiosInatance extends Axios {
  (config: AxiosRequestConfig): AxiosPromise

  (url: string, config?: AxiosRequestConfig): AxiosPromise
}
