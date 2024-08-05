<template>
  <div :class="changeStyles">
    <div class="container__form">
      <v-btn @click="isOpen = true" variant="tonal">Добавить человека</v-btn>
      <v-card max-width="900" v-if="personsStore.personsName.length > 0">
        <v-list lines="three">
          <v-list-item
            v-for="person in personsStore.personsName"
            :key="person"
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
import { ref, computed } from "vue";
import FormPerson from "./FormPerson.vue";
import PersonInfo from "./PersonInfo.vue";
import { usePersonsStore } from "./../store/persons";
import { useRouter } from "vue-router";
import { loadFromLocalStorage } from "../localStore";
import { uuid } from "uuidv4";

let isOpen = ref(false);
let personsList = ref(loadFromLocalStorage(key) || [{ id: uuid(), name: "" }] )
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

</script>
