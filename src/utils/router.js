import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    { 
        name: 'Home', 
        path: '/', 
        component: ()  => import('./../pages/MainPage.vue') 
    },
    { 
        name: 'Persons', 
        path: '/persons', 
        component: ()  => import('./../pages/PersonPage.vue') 
    },
    { 
        name: 'Dishes', 
        path: '/dishes', 
        component: ()  => import('./../pages/DishesPage.vue')
    },
    { 
        name: 'Results', 
        path: '/results', 
        component: ()  => import('./../pages/ResultsPage.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;