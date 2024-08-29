import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import { myPlugin } from './utils/plugins'
import router from './router'
const app = createApp(App)
app.use(ElementPlus)
app.use(myPlugin, {
    // 可选的选项
    greetings: {
        hello: 'world',
        role: 'developer'
    }
})
app.use(router)
app.mount('#app')