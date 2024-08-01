<template>
  <v-container class="container container__form">
    <v-btn text="Добавить блюдо" />
    <dishes-info v-for="dish in dishes" :dish="dish"></dishes-info>
    <div class="container__form__btns">
      <v-btn text="Назад" />
      <v-btn text="Рассчитать" />
    </div>
    <v-card class="h4-dish-page">
      <h4>Итог:</h4>
      <h4 class="h4-red">0</h4>
    </v-card>
  </v-container>
  <form-dishes />
</template>

<script setup>
import { ref } from "vue";
import DishesInfo from "./DishesInfo.vue";
import FormDishes from "./FormDishes.vue";

let dishes = ref([
  {
    id: 1,
    name: "Блюдо 1",
    payer: "A",
    whoEat: ["A", "B"],
    price: 100
  },
  {
    id: 2,
    name: "Блюдо 2",
    payer: "A",
    whoEat: ["B", "C"],
    price: 30
  },
  {
    id: 3,
    name: "Блюдо 3",
    payer: "A",
    whoEat: ["A", "C"],
    price: 500
  }
]);

defineProps({
  dish: Object
})
</script>

<style lang="scss" scoped>
@import "./../assets/style.scss";
</style>
