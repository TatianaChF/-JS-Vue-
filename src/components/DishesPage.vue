<template>
  <v-container class="container container__form">
    <v-btn text="Добавить блюдо" />
    <p v-for="dish in dishes">{{ dish.name }}</p>
    <div class="container__form__btns">
      <v-btn text="Назад" />
      <v-btn text="Рассчитать" />
    </div>
    <v-card class="h4-dish-page">
      <h4>Итог:</h4>
      <h4 class="h4-red">0</h4>
    </v-card>
  </v-container>
</template>

<script setup>
import { ref } from "vue";

let dishes = ref([
  {
    id: 1,
    name: "Блюдо 1",
    payer: "A",
    whoEat: ["A", "B"],
  },
  {
    id: 2,
    name: "Блюдо 2",
    payer: "A",
    whoEat: ["B", "C"],
  },
  {
    id: 3,
    name: "Блюдо 3",
    payer: "A",
    whoEat: ["A", "C"],
  }
]);
</script>

<style lang="scss" scoped>
@import "./../assets/style.scss";
</style>
