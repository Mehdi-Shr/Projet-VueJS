import { createApp } from 'vue'
import { plugin, defaultConfig } from '@formkit/vue'

import App from './App.vue'
import router from './router'
import store from "./store";
import './assets/main.css'

const app = createApp(App)

app.use(router)
app.use(store)
app.use(plugin, defaultConfig({
    theme: 'genesis'
}))


app.mount('#app')
