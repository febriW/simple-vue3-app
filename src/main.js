import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// layout
import Auth from './layout/auth.vue'
import Base from './layout/base.vue'

import './assets/style.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.component('auth-layout', Auth)
app.component('base-layout', Base)

app.mount('#app')
