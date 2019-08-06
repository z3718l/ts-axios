import { AxiosRequestConfig } from './types'
import xhr from './xhr'

// 定义一个axios方法
function axios(config: AxiosRequestConfig): void {
  xhr(config)
}

// 导出
export default axios
