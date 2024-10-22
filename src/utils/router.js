import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    { 
        name: 'Home', 
        path: '/', 
        component: ()  => import('/src/pages/MainPage.vue') 
    },
    { 
        name: 'Persons', 
        path: '/persons', 
        component: ()  => import('/src/pages/PersonPage.vue') 
    },
    { 
        name: 'Dishes', 
        path: '/dishes', 
        component: ()  => import('/src/pages/DishesPage.vue')
    },
    { 
        name: 'Results', 
        path: '/results', 
        component: ()  => import('/src/pages/ResultsPage.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;