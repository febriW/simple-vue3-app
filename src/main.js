import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import App from './App.vue'
import vuetify from './plugins/vuetify'

// layout
import Auth from './layout/auth.vue'
import Base from './layout/base.vue'

const app = createApp(App)
const pinia = createPinia()

app.component('auth-layout', Auth)
app.component('base-layout', Base)

app.use(pinia)
app.use(router)
app.use(vuetify)


app.mount('#app')
