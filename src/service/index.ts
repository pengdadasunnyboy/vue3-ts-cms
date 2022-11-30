//service统一出口
import HYRequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'

const hyRequest = new HYRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: config => {
      console.log('请求成功得拦截')
      return config
    },
    requestInterceptorCatch: err => {
      console.log('请求失败得拦截')
      return err
    },
    responseInterceptor: res => {
      console.log('响应成功得拦截')
      return res
    },
    responseInterceptorCatch: err => {
      console.log('响应失败得拦截')
      return err
    }
  }
})
export default hyRequest

//可以创建多个lyRequest2
// const lyRequest2 = new LYRequest({})
// export default lyRequest2
