<template>
  <v-container class="container">
    <v-card title="Результаты">
        <p>Пользователь A кому-то должен?</p>
        <p>Пользователь В кому-то должен?</p>
        <p>Пользователь С кому-то должен?</p>
    </v-card>
    <div class="container__form__btns">
      <v-btn @click="router.push({name: 'Dishes'})" text="Назад"></v-btn>
      <v-btn @click="router.push({name: 'Home'})" text="На главную"></v-btn>
    </div>
  </v-container>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { usePersonsStore } from '../store/persons';
import { useDishesStore } from '../store/dishes';
import { ref } from 'vue';

const router = useRouter();
const personsStore = usePersonsStore();
const dishesStore = useDishesStore();
const whoPay = ref([]);

for (let i = 0; i < personsStore.persons.length; i++) {
    let currentPerson = personsStore.persons[i];
    let total = 0;
    for (let j = 0; j < dishesStore.dishes.length; j++) {
        let currentDish = dishesStore.dishes[j];
        let prcieForOne = currentDish.price / currentDish.whoEat.length;

        if (currentDish.whoEat.includes(currentPerson)) {
            total += prcieForOne;
        }
    }

    console.log(`${currentPerson} должен ${total} рублей`)
}

</script>

<style lang="scss" scoped>
@import "./../assets/style.scss";
</style>
