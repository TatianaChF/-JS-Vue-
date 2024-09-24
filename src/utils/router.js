import { createRouter, createWebHistory } from 'vue-router'

import ListPerson from './../components/ListPerson.vue'
import MainPage from './../components/MainPage.vue'
import DishesPage from './../components/DishesPage.vue'
import ResultsPage from './../components/ResultsPage.vue'

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