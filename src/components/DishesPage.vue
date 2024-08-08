<template>
  <div :class="changeStyles">
    <v-container class="container container__form">
      <v-btn
        @click="isOpenFormDishes = true"
        variant="tonal"
        text="Добавить блюдо"
      />
      <v-container v-if="dishesList.length > 0">
        <dish-info
          v-for="dish in dishesList"
          :key="dish"
          :dish="dish"
          @remove-dish="
            (dish) => {
              onClickRemoveDish(dish);
            }
          "
        ></dish-info>
      </v-container>
      <p v-else>Список блюд пуст</p>
      <div class="container__form__btns">
        <v-btn
          @click="router.push({ name: 'Persons' })"
          text="Назад"
          variant="tonal"
        />
        <v-btn
          @click="router.push({ name: 'Results' })"
          text="Рассчитать"
          variant="tonal"
        />
      </div>
      <v-card>
        <h4>Итог:</h4>
        <h4>{{ dishesStore.totalPrice }}</h4>
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
        dishesList.push(newDish);
        isOpenFormDishes = false;
        dishesStore.addDish(newDish);
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
const dishesList = ref([]);
const dishesStore = useDishesStore();
const router = useRouter();
const key = "dishesData";
const dishesLocalStorage = localStorage.getItem(key);

if (dishesLocalStorage) {
  dishesList.value = JSON.parse(dishesLocalStorage)._value;
}

defineProps({
  dish: Object,
});

watch(
  () => dishesList,
  (store) => {
    localStorage.setItem(key, JSON.stringify(store));
  },
  { deep: true }
);

// функция удаления блюда 
const onClickRemoveDish = (dishName) => {
  dishesList.value = dishesList.value.filter((dish) => dish.name !== dishName);
  dishesStore.removeDish(dishName);
};

const changeStyles = computed(() => {
  return isOpenFormDishes.value
    ? "container container__hidden_space"
    : "container";
});
</script>

<style lang="scss" scoped>
@import "./../assets/style.scss";
</style>
