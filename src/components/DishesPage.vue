<template>
  <div :class="changeStyles">
    <v-container class="container container__form">
      <v-btn @click="isOpenFormDishes = true" variant="tonal" text="Добавить блюдо" />
      <dishes-info v-for="dish in dishes" :key="dish" :dish="dish"></dishes-info>
      <div class="container__form__btns">
        <v-btn text="Назад" />
        <v-btn text="Рассчитать" />
      </div>
      <v-card>
        <h4>Итог:</h4>
        <h4>0</h4>
      </v-card>
    </v-container>
  </div>
  <form-dishes
    v-if="isOpenFormDishes"
    @change-open-form-dishes="isOpenFormDishes = false"
    @add-dish="(dish) => {
      dishes.push(dish);
    }"
  />
</template>

<script setup>
import { ref, computed } from "vue";
import DishesInfo from "./DishesInfo.vue";
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
