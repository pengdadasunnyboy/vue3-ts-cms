import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { globalRegister } from './global'
import 'normalize.css'
import './assets/css/index.less'

import './service'

// import './service/axios_demo'
import hyRequest from './service'

const app = createApp(App)

//globalRegister(app)
app.use(globalRegister)
app.use(router)
app.use(store)
app.mount('#app')
// console.log(process.env.VUE_APP_BASE_URL)
// console.log(process.env.VUE_APP_BASE_NAME)

interface DataType {
  data: any
  returnCode: string
  success: boolean
}

hyRequest
  .get<DataType>({
    url: '/home/multidata',
    method: 'GET',
    showLoading: false
  })
  .then(res => {
    console.log(res)
  })

// hyRequest.request({
//   url: '/home/multidata',
//   method: 'GET',
//   interceptors: {
//     requestInterceptor: config => {
//       console.log('单独请求的config')
//       return config
//     },
//     responseInterceptor: res => {
//       console.log('单独响应的response')
//       return res
//     }
//   }
// })
