import './assets/main.css'

import {createPinia} from 'pinia'
import Toast from 'vue-toastification'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App)
    .use(createPinia())
    .use(Toast)
    .use(router)
    .mount('#app')
