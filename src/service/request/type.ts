import type { AxiosResponse, AxiosRequestConfig } from 'axios'

interface HYRequestInterceptors {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (config: AxiosResponse) => AxiosResponse
  responseInterceptorCatch?: (error: any) => any
}

interface HYRequestConfig extends AxiosRequestConfig {
  interceptors?: HYRequestInterceptors
  showLoading?: boolean
}

export { HYRequestInterceptors, HYRequestConfig }
