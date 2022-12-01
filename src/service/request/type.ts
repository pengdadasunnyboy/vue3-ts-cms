import type { AxiosResponse, AxiosRequestConfig } from 'axios'

interface HYRequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  // responseInterceptor?: (config: AxiosResponse) => AxiosResponse
  responseInterceptor?: (config: T) => T
  responseInterceptorCatch?: (error: any) => any
}

interface HYRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: HYRequestInterceptors<T>
  showLoading?: boolean
}

export { HYRequestInterceptors, HYRequestConfig }
