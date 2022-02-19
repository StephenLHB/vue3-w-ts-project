import { createApp } from 'vue'
import App from './App.vue'
import 'normalize.css'
import './assets/css/index.less'

import { globalRegister } from './global'

import hbRequest from './service'

import router from './router'
import store from './store'

const app = createApp(App)
app.use(globalRegister)
app.use(router)
app.use(store)
app.mount('#app')

interface DataType {
  code: string
  data: any
  msg: string
}

hbRequest
  .request<DataType>({
    url: '/getMouInfo',
    method: 'POST',
    showLoading: true,
    interceptors: {
      requestInterceptor: (config) => {
        console.log('单独请求的config')
        return config
      },
      responseInterceptor: (res) => {
        console.log('单独响应的res')
        return res
      }
    }
  })
  .then((res) => {
    console.log('res-code==>', res.code)
    console.log('res-data==>', res.data)
    console.log('res-msg==>', res.msg)
  })

hbRequest
  .post<DataType>({
    url: '/getMouInfo',
    showLoading: true,
    interceptors: {
      requestInterceptor: (config) => {
        console.log('单独请求的config')
        return config
      },
      responseInterceptor: (res) => {
        console.log('单独响应的res')
        return res
      }
    }
  })
  .then((res) => {
    console.log('res-code-post==>', res.code)
    console.log('res-data-post==>', res.data)
    console.log('res-msg-post==>', res.msg)
  })
