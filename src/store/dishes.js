import { defineStore } from 'pinia'
import { computed, ref, watch } from 'vue'

export const useDishesStore = defineStore('dishesData', () => {
    const dishes = ref([]);
    const dishesLocalStorage = localStorage.getItem("dishes");

    if (dishesLocalStorage) {
        dishes.value = JSON.parse(dishesLocalStorage);
    }

    const totalPrice = computed(() => {
        if(dishes.value.length == 0) return 0
        else {
            return dishes.value.reduce((acc, dish) => acc + parseFloat(dish.price), 0);
        }
    })

    const addDish = (dish) => {
        dishes.value.push(dish);
    }

    const removeDish = (dishId) => {
        dishes.value = dishes.value.filter(dish => dish.id !== dishId) 
    }

    return {
        dishes,
        addDish,
        removeDish,
        totalPrice
    }
})