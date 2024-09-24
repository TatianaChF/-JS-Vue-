import { createApp } from 'vue'
import router from "./utils/router"
import pinia from "./utils/pinia"

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// Components
import App from './App.vue'

const vuetify = createVuetify({
  components,
  directives,
})

createApp(App).use(router).use(vuetify).use(pinia).mount('#app')