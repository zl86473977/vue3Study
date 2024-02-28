import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { myPlugin } from './utils/plugins'

const app = createApp(App)
app.use(ElementPlus)
app.use(myPlugin, {
    // 可选的选项
    greetings: {
        hello: 'world',
        role: 'developer'
    }
})

app.mount('#app')