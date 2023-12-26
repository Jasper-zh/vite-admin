import { createApp } from 'vue'
import TDesign from 'tdesign-vue-next';
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'
import 'tdesign-vue-next/es/style/index.css';


const pinia = createPinia()
const app = createApp(App)
app.use(TDesign)
app.use(pinia)
app.mount('#app')
