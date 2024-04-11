// import './assets/main.css'
import 'tailwindcss/tailwind.css';
import axios from 'axios'
import { createApp } from 'vue';
axios.defaults.baseURL = import.meta.env.VITE_API_URL
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import App from './App.vue'
import router from './router'

// Init Pinia
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

const app = createApp(App)


app.use(pinia)

app.component('',)
app.use(router)


app.mount('#app')
