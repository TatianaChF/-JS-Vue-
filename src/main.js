import { createApp } from 'vue'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// Router
import { createMemoryHistory, createRouter } from 'vue-router'


// Components
import App from './App.vue'
import ListPerson from './components/ListPerson.vue'

const vuetify = createVuetify({
  components,
  directives,
})

const routes = [
  { path: '/', component: App },
  { path: '/persons', component: ListPerson },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

createApp(App).use(router).use(vuetify).mount('#app')