<template>
  <div class="container">
    <v-sheet class="mx-auto" width="500">
      <v-form class="form" v-model="isRules" @submit.prevent>
        <v-text-field v-model="dish.name" :rules="nameRules" label="Название блюда" />
        <v-text-field v-model="dish.price" :rules="priceRules" label="Цена" />
        <v-select
          :items="personsNames.map((person) => person.name)"
          label="Кто платил?"
          v-model="dish.payer"
          :rules="selectRules"
        />
        <v-btn-toggle v-model="toggleMultiple" multiple>
          <p>Кто ел?</p>
          <div v-for="(person, index) in personsNames" :key="index">
            <v-btn @click="onClickAddWhoEat">{{ person.name }}</v-btn>
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
import { onMounted, ref } from "vue";
import { usePersonsStore } from "./../store/persons";

const personsStore = usePersonsStore();
let dish = ref({
  id: "",
  name: "",
  payer: "",
  whoEat: [],
  price: 0
})
let toggleMultiple = ref([]);
const personsNames = ref([]);
let isRules = ref(false);

onMounted(() => {
  if (personsStore.persons.length) {
    personsNames.value = JSON.parse(personsStore.persons)._value;
  } else {
    personsNames.value = JSON.parse(localStorage.getItem("personsData"))._value;
  }
})

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
