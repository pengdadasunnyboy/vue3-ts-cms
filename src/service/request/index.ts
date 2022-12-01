import axios from 'axios'
import type { AxiosInstance } from 'axios'
import type { HYRequestInterceptors, HYRequestConfig } from './type'

import { ElLoading } from 'element-plus'
import { LoadingInstance } from 'element-plus/lib/components/loading/src/loading.js'

const DEFAULT_LOADING = true

class HYRequest {
  instance: AxiosInstance
  interceptors?: HYRequestInterceptors
  loading?: LoadingInstance
  showLoading: boolean

  constructor(config: HYRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors
    this.showLoading = config.showLoading ?? DEFAULT_LOADING

    //从config中取出的拦截器是对应的实例的拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )

    //添加所有的实例都有的拦截器
    this.instance.interceptors.request.use(
      config => {
        console.log('所有实例都有的拦截器，请求成功')
        if (this.showLoading) {
          this.loading = ElLoading.service({
            lock: true,
            text: '正在请求数据...',
            background: 'rgba(0, 0, 0, 0.5)'
          })
        }
        return config
      },
      err => {
        console.log('所有实例都有的拦截器，请求失败')
        return err
      }
    )

    this.instance.interceptors.response.use(
      res => {
        console.log('所有实例都有的拦截器，响应成功')
        //将loading移除
        // this.loading?.close()
        setTimeout(() => {
          this.loading?.close()
        }, 1000)
        const data = res.data
        if (data.returnCode === '-1001') {
          console.log('请求失败~,错误信息')
        } else {
          return data
        }
        return res.data
      },
      err => {
        console.log('所有实例都有的拦截器，响应失败')
        //将loading移除
        this.loading?.close()
        //判断不同的httpErrorCode显示不同的错误信息
        if (err.response.status === 404) {
          console.log('404的错误~')
        }
        return err
      }
    )
  }

  // request(config: AxiosRequestConfig): void {
  //   this.instance.request(config).then(res => {
  //     console.log(res)
  //   })
  // }

  request<T>(config: HYRequestConfig<any>): Promise<T> {
    return new Promise((resolve, reject) => {
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }

      if (config.showLoading === false) {
        this.showLoading = config.showLoading
      }

      this.instance
        .request<any, T>(config)
        .then(res => {
          //1 单个请求对数据的处理
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res)
          }
          //console.log(res)
          //2 将showLoading设置为true, 这样不会影响下一个请求
          this.showLoading = DEFAULT_LOADING

          //3 将结果resolve返回回去
          resolve(res)
        })
        .catch(err => {
          this.showLoading = DEFAULT_LOADING
          reject(err)
          return err
        })
    })
  }

  get<T>(config: HYRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' })
  }
  post<T>(config: HYRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' })
  }
  delete<T>(config: HYRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'DELETE' })
  }
  patch<T>(config: HYRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'PATCH' })
  }
}

export default HYRequest
