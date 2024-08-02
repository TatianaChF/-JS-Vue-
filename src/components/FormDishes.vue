<template>
  <div class="container">
    <v-sheet class="mx-auto" width="500">
      <v-form class="form" @submit.prevent>
        <v-text-field v-model="dish.name" :rules="rules" label="Название блюда" />
        <v-text-field v-model="dish.price" :rules="rules" label="Цена" />
        <v-select
          :items="personsStore.persons.map((person) => person)"
          label="Кто платил?"
          v-model="dish.payer"
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

// добавление значений в массив whoEat
const onClickAddWhoEat = () => {
  for (let i = 0; i < toggleMultiple.value.length; i++ ) {
    if (!dish.value.whoEat.includes(personsStore.persons[toggleMultiple.value[i]])) {
      dish.value.whoEat.push(personsStore.persons[toggleMultiple.value[i]]);
    }
  }
}
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
