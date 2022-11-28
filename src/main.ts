import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { registerApp } from './global'

// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'

const app = createApp(App)

registerApp(app)
app.use(router)
app.use(store)
// app.use(ElementPlus)
app.mount('#app')
