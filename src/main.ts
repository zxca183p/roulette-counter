// import './assets/main.css'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import ContainerPage from './ContainerPage.vue'
import router from './router'

const app = createApp(ContainerPage)

app.use(createPinia())
app.use(router)

app.mount('#app')
