<template>
  <div class="container">
    <v-sheet class="mx-auto" width="500">
      <v-form class="form" v-model="isRules" @submit.prevent>
        <v-text-field v-model="dish.name" :rules="nameRules" label="Название блюда" />
        <v-text-field v-model="dish.price" :rules="priceRules" label="Цена" />
        <v-select
          :items="personsStore.persons.map((person) => person)"
          label="Кто платил?"
          v-model="dish.payer"
          :rules="selectRules"
        />
        <v-btn-toggle v-model="toggleMultiple" multiple>
          <p>Кто ел?</p>
          <div v-for="(person, index) in personsStore.persons" :key="index">
            <v-btn @click="onClickAddWhoEat">{{ person }}</v-btn>
          </div>
        </v-btn-toggle>
        <v-btn
          class="mt-2"
          type="submit"
          variant="tonal"
          @click="$emit('addDish', dish)"
          :disabled="!isRules"
          block
          >Добавить</v-btn
        >
      </v-form>
    </v-sheet>
    <v-btn variant="text" @click="$emit('changeOpenFormDishes')">x</v-btn>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { usePersonsStore } from "./../store/persons";

const personsStore = usePersonsStore();
let dish = ref({
  id: 0,
  name: "",
  payer: "",
  whoEat: [],
  price: 0
})
let toggleMultiple = ref([]);
let isRules = ref(false);

// добавление значений в массив whoEat
const onClickAddWhoEat = () => {
  for (let i = 0; i < toggleMultiple.value.length; i++ ) {
    if (!dish.value.whoEat.includes(personsStore.persons[toggleMultiple.value[i]])) {
      dish.value.whoEat.push(personsStore.persons[toggleMultiple.value[i]]);
    }
  }
}

const nameRules = [
  (v) => !!v || "Поле обязательно для заполнения"
];

const priceRules = [
  (v) =>
    (!isNaN(parseFloat(v)) && isFinite(v)) || "Значение должно быть числом",
  (v) => (v && v > 0) || "Цена не может быть отрицательным числом или равной нулю",
]

const selectRules = [
  (v) => !!v || 'Выберите значение'
]

</script>

<style lang="scss" scoped>
.form {
  padding: 20px 30px;
  border: 1px solid grey;
}

.container {
  display: flex;
  flex-direction: row;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
