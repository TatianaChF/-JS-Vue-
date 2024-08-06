<template>
  <div :class="changeStyles">
    <div class="container__form">
      <v-btn @click="isOpen = true" variant="tonal">Добавить человека</v-btn>
      <v-card max-width="900" v-if="personsList?.length > 0">
        <v-list lines="three">
          <v-list-item
            v-for="person in personsList"
            :key="person.id"
            :title="name"
          >
            <person-info 
              :person="person" 
              @remove-person="(name) => {
                personsStore.deletePerson(name)
              }"></person-info>
          </v-list-item>
        </v-list>
      </v-card>
      <p v-else>Список людей пуст</p>
    </div>
    <v-btn @click="router.push({name: 'Dishes'})" variant="tonal">Дальше!</v-btn>
  </div>
  <FormPerson
    v-if="isOpen"
    :open="isOpen"
    @change-open="isOpen = false"
    @add-person="(person) => {
      personsStore.addPersonName(person);
      isOpen = false;
    }"
  ></FormPerson>
</template>

<style lang="scss" scoped>
@import "./../assets/style.scss";
</style>

<script setup>
import { ref, computed, onMounted } from "vue";
import FormPerson from "./FormPerson.vue";
import PersonInfo from "./PersonInfo.vue";
import { usePersonsStore } from "./../store/persons";
import { useRouter } from "vue-router";
import { loadFromLocalStorage, saveToLocalStorage } from "../localStore";
import { v4 as uuidv4 } from 'uuid';

const key = "personsData";
let isOpen = ref(false);
let personsList = ref(loadFromLocalStorage(key) )
const personsStore = usePersonsStore();
const router = useRouter();

defineProps({
  open: Boolean,
  id: Number,
  name: String,
});

const changeStyles = computed(() => {
  return isOpen.value ? "container container__hidden_space" : "container";
});

onMounted(() => {
  if (!localStorage.getItem(key)) {
    saveToLocalStorage(
      key, 
      personsList.value.map((person) => ({id: person.id, name: person.name})))
  }
})

//выгружаем данные из локального хранилища
const uploadingLocalData = () => {
  const data = loadFromLocalStorage(key);

  if (data) {
    personsList.value = data
  }

//добавляем данных в стор
  for (let i = 0; i < personsList.value.length; i++) {
    personsStore.addPersonName(personsList.value[i]);
  }
}
</script>
