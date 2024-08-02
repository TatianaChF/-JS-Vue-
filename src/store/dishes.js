import { defineStore } from "pinia";

export const useDishesStore = defineStore('dishes', {
    state: () => ({
        dishes: [
            {
              id: 1,
              name: "Блюдо 1",
              payer: "A",
              whoEat: ["A", "B"],
              price: 100,
            },
            {
              id: 2,
              name: "Блюдо 2",
              payer: "A",
              whoEat: ["B", "C"],
              price: 30,
            },
            {
              id: 3,
              name: "Блюдо 3",
              payer: "A",
              whoEat: ["A", "C"],
              price: 500,
            },
        ]
    })
})