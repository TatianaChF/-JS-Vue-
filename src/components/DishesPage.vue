<template>
  <div :class="changeStyles">
    <v-container class="container container__form">
      <v-btn @click="isOpenFormDishes = true" variant="tonal" text="Добавить блюдо" />
      <dish-info v-for="dish in dishes" :key="dish" :dish="dish"></dish-info>
      <div class="container__form__btns">
        <v-btn text="Назад" />
        <v-btn text="Рассчитать" />
      </div>
      <v-card>
        <h4>Итог:</h4>
        <h4>{{ totalPrice }}</h4>
      </v-card>
    </v-container>
  </div>
  <form-dishes
    v-if="isOpenFormDishes"
    @change-open-form-dishes="isOpenFormDishes = false"
    @add-dish="(dish) => {
      dishes.push(dish);
      isOpenFormDishes = false;
    }"
  />
</template>

<script setup>
import { ref, computed } from "vue";
import DishInfo from "./DishInfo.vue";
import FormDishes from "./FormDishes.vue";

let isOpenFormDishes = ref(false);
let dishes = ref([
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
]);
const totalPrice = computed(() => {
  for(let i = 0; i < dishes.value.length; i++) {
    return dishes.value.reduce((acc, dish) => acc + parseFloat(dish.price), 0);
  }
})

defineProps({
  dish: Object,
});

const changeStyles = computed(() => {
  return isOpenFormDishes.value ? "container container__hidden_space" : "container";
});
</script>

<style lang="scss" scoped>
@import "./../assets/style.scss";
</style>
