<template>
  <div :class="changeStyles">
    <v-container class="d-flex flex-sm-column align-center justify-center ga-3 mb-20 rounded-lg bg-brown-lighten-5">
      <v-btn
        class="position-relative mt-9 bg-brown-lighten-3"
        @click="isOpenFormDishes = true"
        variant="tonal"
        text="Добавить блюдо" 
      />
      <v-container v-if="dishesStore.dishes.length > 0">
        <dish-info
          v-for="dish in dishesStore.dishes"
          :key="dish"
          :dish="dish"
          @remove-dish="(dish) => onRemoveDish(dish)" 
        />
      </v-container>
      <p v-else>Список блюд пуст</p>
      <div 
        class="d-flex justify-md-space-around align-center" 
        style="width: 40%"
      >
        <v-btn
          class="position-relative bg-brown-lighten-3"
          :to="{ name: 'Persons' }"
          text="Назад"
          variant="tonal" 
        />
        <v-btn
          class="position-relative bg-brown-lighten-3"
          :to="{ name: 'Results' }"
          text="Рассчитать"
          variant="tonal" 
        />
      </div>
      <v-card 
        class="d-flex justify-md-center align-center bg-grey-darken-1 ga-lg-1"
        style="width: 50%; height: 40px"
      >
        <h4>Итог:</h4>
        <h4>{{ dishesStore.totalPrice }} рублей</h4>
      </v-card>
    </v-container>
  </div>
  <form-dishes
    v-if="isOpenFormDishes"
    @change-open-form-dishes="isOpenFormDishes = false"
    @add-dish="(dish) => onAddDish(dish)" 
  />
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

dishesStore.$subscribe((mutation, state) => {
  localStorage.setItem("dishes", JSON.stringify(state.dishes))
})


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

