import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'


const pinia = createPinia()



createApp(App).use(pinia).use(router).mount('#app')


import router from './router/index.js';