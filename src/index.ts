import { AxiosRequestConfig } from './types'
import xhr from './xhr'
import { buildURL } from './helpers/url'

// 定义一个axios方法
function axios(config: AxiosRequestConfig): void {
  processConfig(config)
  xhr(config)
}

// 发送请求之前对config做处理
function processConfig(config: AxiosRequestConfig): void {
  config.url = transformURL(config)
}
// 对config的url做处理
function transformURL(config: AxiosRequestConfig): string {
  const { url, params } = config
  return buildURL(url, params)
}

// 导出
export default axios
