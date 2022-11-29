import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { globalRegister } from './global'

import './service/axios_demo'

const app = createApp(App)

//globalRegister(app)
app.use(globalRegister)
app.use(router)
app.use(store)
app.mount('#app')
console.log(process.env.VUE_APP_BASE_URL)
console.log(process.env.VUE_APP_BASE_NAME)
