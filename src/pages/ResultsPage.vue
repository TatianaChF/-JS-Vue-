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
const outputResultsArr = ref([]);
const debts = ref([]);

onMounted(() => {
  // цикл, в котором заполняется массив должников
  for (let i = 0; i < personsStore.persons.length; i++) {
    let currentPerson = personsStore.persons[i].name;
    let payerName;

    for (let j = 0; j < dishesStore.dishes.length; j++) {
      let currentDish = dishesStore.dishes[j];
      let priceForOne = currentDish.price / currentDish.whoEat.length;

      if (currentDish.whoEat.includes(currentPerson)) {
        if (currentPerson !== currentDish.payer) {
          payerName = currentDish.payer;

          const duty = {
            debtor: currentPerson,
            payer: payerName,
            sum: priceForOne
          }

          debts.value.push(duty);
        } 
      }
    }
  } 

  // цикл, в котором высчитывается общая сумма долга
  for (let i = 0; i < debts.value.length; i++) {
    const currentDebt = debts.value[i];
    let reverseDebt = debts.value.find((debt) => debt.debtor === currentDebt.payer && debt.payer === currentDebt.debtor);
    let sameDebt = debts.value.find((debt) => debt.debtor === currentDebt.debtor && debt.payer === currentDebt.payer);

    if (sameDebt && sameDebt != currentDebt) {
      currentDebt.sum += sameDebt.sum;
      let newDebts = debts.value.filter((debt) => debt != sameDebt);
      debts.value = newDebts;
    }

    if (reverseDebt) {
      if (reverseDebt.sum > currentDebt.sum) {
        reverseDebt.sum = reverseDebt.sum - currentDebt.sum;
        currentDebt.sum = 0;
      } else {
        currentDebt.sum = currentDebt.sum - reverseDebt.sum;
        reverseDebt.sum = 0;
      }
    } 
  } 

  // цикл для заполнения массива результатов
  for (let i = 0; i < debts.value.length; i++) {
    const currentDebt = debts.value[i];
    let result;

    if (currentDebt.sum === 0) {
      result = `${currentDebt.debtor} никому ничего не должен ;))`;

      results.value.push({
        id: uuidv4(),
        description: result
      });
    } else {
      result = `${currentDebt.debtor} должен ${currentDebt.payer} ${currentDebt.sum} рублей`;

      results.value.push({
        id: uuidv4(),
        description: result
      });
    }
  }

  //цикл для вывода пользователей, которые не попали в массив должников
  for (let i = 0; i < personsStore.persons.length; i++) {
    let currentPerson = personsStore.persons[i].name;
    let payer = debts.value.find((debt) => debt.debtor === currentPerson);

    if (!payer) {
      let result = `${currentPerson} никому ничего не должен ;))`;

      results.value.push({
        id: uuidv4(),
        description: result
      });
    }
  }
})

</script>

