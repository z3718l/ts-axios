import { AxiosRequestConfig, AxiosPromise, AxiosResponse } from '../types'
import xhr from './xhr'
import { buildURL } from '../helpers/url'
import { transformRequest, transformResponse } from '../helpers/data'
import { processHeaders, flattenHeaders } from '../helpers/headers'

// 定义一个axios方法
export default function dispatchRequest(config: AxiosRequestConfig): AxiosPromise {
  processConfig(config)
  return xhr(config).then(res => {
    return transformResponseData(res)
  })
}

// 发送请求之前对config做处理
function processConfig(config: AxiosRequestConfig): void {
  config.url = transformURL(config)
  config.headers = transformHeaders(config) // 先处理headers 再处理data
  config.data = transformRequestData(config)

  config.headers = flattenHeaders(config.headers, config.method!)
}
// 对config的url做处理
function transformURL(config: AxiosRequestConfig): string {
  const { url, params } = config
  // url! :类型断言，不为空
  return buildURL(url!, params)
}

function transformRequestData(config: AxiosRequestConfig): any {
  return transformRequest(config.data)
}

// 处理headers
// 查找错误打印每一个数据，并打断点，看看在哪里数据发生了变化
function transformHeaders(config: AxiosRequestConfig): any {
  const { headers = {}, data } = config
  return processHeaders(headers, data)
}

function transformResponseData(res: AxiosResponse): AxiosResponse {
  res.data = transformResponse(res.data)
  return res
}
