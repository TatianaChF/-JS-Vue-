<template>
  <div class="form form__container">
    <v-sheet 
      class="mx-auto" 
      width="500"
    >
      <v-form 
        class="form form__add-person" 
        v-model="isRules" 
        @submit.prevent
      >
        <v-text-field 
          v-model="dish.name" 
          :rules="nameRules" 
          label="Название блюда" 
        />
        <v-text-field 
          v-model="dish.price" 
          :rules="priceRules" 
          label="Цена" 
        />
        <v-select
          :items="personsStore.persons.map((person) => person.name)"
          label="Кто платил?"
          v-model="dish.payer"
          :rules="selectRules" 
        />
        <v-btn-toggle 
          class="form__btn-toggle" 
          v-model="toggleMultiple"
          multiple
        >
          <p>Кто ел?</p>
          <div 
            class="form__btn-toggle__btn" 
            v-for="(person) in personsStore.persons" 
            :key="person.id"
          >
            <v-btn 
              class="form__btn-toggle__btn__color" 
              @click="onClickAddWhoEat"
              variant="outlined"
            >
              {{ person.name }}
            </v-btn>
          </div>
        </v-btn-toggle>
        <v-btn
          class="btn" 
          type="submit"
          variant="tonal"
          @click="$emit('addDish', dish)"
          :disabled="!isRules"
          block
        >
          Добавить
        </v-btn
        >
      </v-form>
    </v-sheet>
    <v-btn 
      variant="text" 
      @click="$emit('changeOpenFormDishes')"
    >
      x
    </v-btn>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { usePersonsStore } from "./../store/persons";
import { v4 as uuidv4 } from "uuid";

const personsStore = usePersonsStore();

let dish = ref({
  id: uuidv4(),
  name: "",
  payer: "",
  whoEat: [],
  price: 0
})
let toggleMultiple = ref([]);
let isRules = ref(false);

onMounted(() => {
  console.log(personsStore.persons)
})

// добавление значений в массив whoEat
const onClickAddWhoEat = () => {
  for (let i = 0; i < toggleMultiple.value.length; i++ ) {
    if (!dish.value.whoEat.includes(personsStore.persons[toggleMultiple.value[i]].name)) {
      dish.value.whoEat.push(personsStore.persons[toggleMultiple.value[i]].name);
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

