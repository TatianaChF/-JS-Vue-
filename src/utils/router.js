import { createRouter, createWebHistory } from 'vue-router'

import ListPerson from './../pages/PersonPage.vue'
import MainPage from './../pages/MainPage.vue'
import DishesPage from './../pages/DishesPage.vue'
import ResultsPage from './../pages/ResultsPage.vue'

const routes = [
    { name: 'Home', path: '/', component: MainPage },
    { name: 'Persons', path: '/persons', component: ListPerson },
    { name: 'Dishes', path: '/dishes', component: DishesPage },
    { name: 'Results', path: '/results', component: ResultsPage }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;