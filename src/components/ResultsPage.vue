<template>
  <v-container class="container">
    <v-card class="results__card">
      <h3>Результаты</h3>
      <v-container class="results__text">
        <div 
          v-for="(result, index) in results" 
          :key="index">
          <p>{{ result }}</p>
        </div>
      </v-container>
    </v-card>
    <div class="container__form__btns">
      <v-btn 
        class="btn" 
        :to="{ name: 'Dishes' }" 
        text="Назад" />
      <v-btn 
        class="btn__main" 
        :to="{ name: 'Home' }" 
        text="На главную" />
    </div>
  </v-container>
</template>

<script setup>
import { useRouter } from "vue-router";
import { usePersonsStore } from "../store/persons";
import { useDishesStore } from "../store/dishes";
import { ref } from "vue";

const router = useRouter();
const personsStore = usePersonsStore();
const dishesStore = useDishesStore();
const results = ref([]);

// цикл, в котором высчитывается, кто сколько должен
for (let i = 0; i < personsStore.persons.length; i++) {
  let currentPerson = personsStore.persons[i].name;
  let total = 0;
  for (let j = 0; j < dishesStore.dishes.length; j++) {
    let currentDish = dishesStore.dishes[j];
    let priceForOne = currentDish.price / currentDish.whoEat.length;

    if (currentDish.whoEat.includes(currentPerson)) {
      total += priceForOne;
    }
  }

  let result = `${currentPerson} должен ${total.toFixed(2)} рублей`;
  results.value.push(result);
}
</script>

