<template>
  <div :class="changeStyles">
    <v-container class="container container__form">
      <v-btn @click="isOpenFormDishes = true" variant="tonal" text="Добавить блюдо" />
      <v-container v-if="dishesStore.dishes.length > 0">
        <dish-info 
          v-for="dish in dishesStore.dishes" 
          :key="dish" 
          :dish="dish"
          @remove-dish="(dish) => {
            dishesStore.removeDish(dish)
          }"></dish-info>
      </v-container>
      <p v-else>Список блюд пуст</p>
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
      dishesStore.addDish(dish);
      isOpenFormDishes = false;
    }"
  />
</template>

<script setup>
import { ref, computed } from "vue";
import DishInfo from "./DishInfo.vue";
import FormDishes from "./FormDishes.vue";
import { useDishesStore } from "./../store/dishes";

let isOpenFormDishes = ref(false);
const dishesStore = useDishesStore();
const totalPrice = computed(() => {
  for(let i = 0; i < dishesStore.dishes.length; i++) {
    return dishesStore.dishes.reduce((acc, dish) => acc + parseFloat(dish.price), 0);
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
