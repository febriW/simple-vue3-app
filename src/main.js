import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createVuetify } from 'vuetify'

import App from './App.vue'
import router from './router'

import vuetify from './plugins/vuetify'

// layout
import Auth from './layout/auth.vue'
import Base from './layout/base.vue'

const app = createApp(App)
app.use(createPinia())

app.use(router)
app.use(vuetify)


app.component('auth-layout', Auth)
app.component('base-layout', Base)

app.mount('#app')
