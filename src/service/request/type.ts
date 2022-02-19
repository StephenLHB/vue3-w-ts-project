import type { AxiosRequestConfig } from 'axios'

export interface HBRequestInterceptors {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (config: any) => any
  responseInterceptorCatch?: (error: any) => any
}

export interface HBRequestConfig extends AxiosRequestConfig {
  interceptors?: HBRequestInterceptors
  showLoading?: boolean
}
