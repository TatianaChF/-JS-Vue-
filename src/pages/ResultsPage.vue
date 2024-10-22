<template>
  <v-container class="d-flex flex-sm-column justify-center align-center mt-4">
    <v-card 
      class="bg-brown-lighten-5 mb-3" 
      style="width: 80%"
    >
      <h3 
        class="text-center font-weight-black mt-4" 
        style="color: #EF5350"
      >
        Результаты
      </h3>
      <v-container class="text-center mb-3 text-body-1">
        <div 
          v-for="result in results" 
          :key="result.id"
        >
          <p class="mb-1">{{ result.description }}</p>
        </div>
      </v-container>
    </v-card>
    <div 
      class="d-flex justify-space-around align-center"
      style="width: 50%"
    >
      <v-btn 
        class="bg-brown-lighten-3" 
        :to="{ name: 'Dishes' }" 
        text="Назад" 
      />
      <v-btn 
        class="bg-red-lighten-1" 
        :to="{ name: 'Home' }" 
        text="На главную" 
      />
    </div>
  </v-container>
</template>

<script setup>
import { useRouter } from "vue-router";
import { usePersonsStore } from "../store/persons";
import { useDishesStore } from "../store/dishes";
import { onMounted, ref } from "vue";
import { v4 as uuidv4 } from "uuid";

const router = useRouter();
const personsStore = usePersonsStore();
const dishesStore = useDishesStore();
const results = ref([]);

onMounted(() => {
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
    results.value.push({
      id: uuidv4(),
      description: result
    });
  }
})


</script>

