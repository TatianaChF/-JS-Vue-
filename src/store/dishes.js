import { defineStore } from 'pinia'

export const useDishesStore = defineStore('dishes', {
    state: () => {
        const dishesData = localStorage.getItem('dishesData');
        return {
            dishes: dishesData || []
        }
    },
    /*getters: {
        totalPrice: (state) => {
            if(state.dishes.length == 0) return 0
            else {
                for(let i = 0; i < state.dishes.length; i++) {
                    return state.dishes.reduce((acc, dish) => acc + parseFloat(dish.price), 0);
                }
            }
        }
    },*/
    actions: {
        addDish(dish) {
            this.dishes.push(dish);
        },

        removeDish(dishName) {
            this.dishes = this.dishes.filter(dish => dish.name !== dishName);
        }
    }

})