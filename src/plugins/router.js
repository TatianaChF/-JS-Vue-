import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from './HomeView.vue'
import AboutView from './AboutView.vue'
import ListPerson from '../components/ListPerson.vue'

const routes = [
  { path: '/', component: App },
  { path: '/persons', component: ListPerson },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})