<template>
  <div :class="changeStyles">
    <v-container class="container container__form">
      <v-btn
        class="container__form__btn"
        @click="isOpenFormDishes = true"
        variant="tonal"
        text="Добавить блюдо"
      />
      <v-container v-if="dishesStore.dishes.length > 0">
        <dish-info
          v-for="dish in dishesStore.dishes"
          :key="dish"
          :dish="dish"
          @remove-dish="
            (dish) => {
              dishesStore.removeDish(dish)
            }
          "
        ></dish-info>
      </v-container>
      <p v-else>Список блюд пуст</p>
      <div class="container__form__btns">
        <v-btn
          class="btn"
          @click="router.push({ name: 'Persons' })"
          text="Назад"
          variant="tonal"
        />
        <v-btn
          class="btn"
          :to="{ name: 'Results' }"
          text="Рассчитать"
          variant="tonal"
        />
      </div>
      <v-card class="container__result">
        <h4>Итог:</h4>
        <h4>{{ dishesStore.totalPrice }} рублей</h4>
      </v-card>
    </v-container>
  </div>
  <form-dishes
    v-if="isOpenFormDishes"
    @change-open-form-dishes="isOpenFormDishes = false"
    @add-dish="
      (dish) => {
        newDish = {
          id: uuidv4(),
          name: dish.name,
          payer: dish.payer,
          whoEat: dish.whoEat,
          price: dish.price,
        };
        dishesStore.addDish(newDish);
        isOpenFormDishes = false;
      }
    "
  />
</template>

<script setup>
import { ref, computed, watch } from "vue";
import DishInfo from "./DishInfo.vue";
import FormDishes from "./FormDishes.vue";
import { useDishesStore } from "./../store/dishes";
import { useRouter } from "vue-router";
import { v4 as uuidv4 } from "uuid";

let isOpenFormDishes = ref(false);
const dishesStore = useDishesStore();
const router = useRouter();

defineProps({
  dish: Object,
});

const changeStyles = computed(() => {
  return isOpenFormDishes.value
    ? "container container__hidden_space"
    : "container";
});
</script>

<style lang="scss" scoped>
@import "./../assets/style.scss";
</style>
