import { createApp } from 'vue'
import { createPinia } from 'pinia'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// Components
import App from './App.vue'


import { createMemoryHistory, createRouter, createWebHistory } from 'vue-router'

import ListPerson from './components/ListPerson.vue'
import MainPage from './components/MainPage.vue'

const vuetify = createVuetify({
  components,
  directives,
})

const routes = [
    { name: 'Home', path: '/', component: MainPage },
    { name: 'Persons', path: '/persons', component: ListPerson },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

const pinia = createPinia()


createApp(App).use(router).use(pinia).use(vuetify).mount('#app')