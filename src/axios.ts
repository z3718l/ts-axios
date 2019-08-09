import { AxiosInatance, AxiosRequestConfig } from './types'
import Axios from './core/Axios'
import { extend } from './helpers/util'
import defaults from './defaults'

function createInstance(config: AxiosRequestConfig): AxiosInatance {
  const context = new Axios(config)
  const instance = Axios.prototype.request.bind(context)

  extend(instance, context)
  return instance as AxiosInatance
}
const axios = createInstance(defaults)

// 导出
export default axios
