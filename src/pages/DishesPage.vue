<template>
  <div :class="changeStyles">
    <v-container class="container container__form">
      <v-btn
        class="container__form__btn"
        @click="isOpenFormDishes = true"
        variant="tonal"
        text="Добавить блюдо" />
      <v-container v-if="dishesStore.dishes.length > 0">
        <dish-info
          v-for="dish in dishesStore.dishes"
          :key="dish"
          :dish="dish"
          @remove-dish="(dish) => onRemoveDish(dish)" />
      </v-container>
      <p v-else>Список блюд пуст</p>
      <div class="container__form__btns">
        <v-btn
          class="btn"
          :to="{ name: 'Persons' }"
          text="Назад"
          variant="tonal" />
        <v-btn
          class="btn"
          :to="{ name: 'Results' }"
          text="Рассчитать"
          variant="tonal" />
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
    @add-dish="(dish) => onAddDish(dish)" />
</template>

<script setup>
import { ref, computed, watch, onMounted } from "vue";
import DishInfo from "../components/DishInfo.vue";
import FormDishes from "../components/FormDishes.vue";
import { useDishesStore } from "../store/dishes";
import { useRouter } from "vue-router";
import { v4 as uuidv4 } from "uuid";

let isOpenFormDishes = ref(false);
const dishesStore = useDishesStore();
const router = useRouter();
const dishesLocalStorage = localStorage.getItem("dishes");

if (dishesLocalStorage) {
    dishesStore.dishes = JSON.parse(dishesLocalStorage);
}

dishesStore.$subscribe((mutation, state) => {
  localStorage.setItem("dishes", JSON.stringify(state.dishes))
}, { detached: true })

defineProps({
  dish: Object,
});

const changeStyles = computed(() => {
  return isOpenFormDishes.value
    ? "container container__hidden_space"
    : "container";
});

const onAddDish = (dish) => {
  dishesStore.addDish(dish);
  isOpenFormDishes.value = false;
}

const onRemoveDish = (dish) => {
  dishesStore.removeDish(dish);
}
</script>

