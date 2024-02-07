import { createApp } from 'vue'
import App from './App.vue'
import { myPlugin } from './utils/plugins'

const app = createApp(App)

app.use(myPlugin, {
    // 可选的选项
    greetings: {
        hello: 'world',
        role: 'developer'
    }
})

app.mount('#app')