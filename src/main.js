import { createApp } from 'vue'
import router from "./utils/router"
import pinia from "./utils/pinia"
import vuetify from "./utils/vuetify"
import App from './App.vue'
import "./assets/style.scss"

createApp(App).use(router).use(vuetify).use(pinia).mount('#app')