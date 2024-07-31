<template>
  <div :class="changeStyles">
    <div class="container__form-person">
      <v-btn @click="isOpen = true" variant="tonal">Добавить человека</v-btn>
      <v-card max-width="900" v-if="persons.length > 0">
        <v-list lines="three">
          <v-list-item
            v-for="person in persons"
            :key="person.id"
            :title="name"
          >
            <person-info 
              :person="person" 
              @remove-person="(id) => {
                persons = persons.filter(person => person.id != id);
              }"></person-info>
          </v-list-item>
        </v-list>
      </v-card>
      <p v-else>Список людей пуст</p>
    </div>
    <v-btn variant="tonal">Дальше!</v-btn>
  </div>
  <FormPerson
    v-if="isOpen"
    :open="isOpen"
    :id="persons.length"
    @change-open="isOpen = false"
    @add-person="(person) => {
        persons.push(person);
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

let isOpen = ref(false);
let persons = ref([
    {id: 1, firstName: 'A'},
    {id: 2, firstName: 'B'},
    {id: 3, firstName: 'C'}
]);
const personStore = usePersonsStore();

defineProps({
  open: Boolean,
  id: Number,
  name: String,
});

const changeStyles = computed(() => {
  return isOpen.value ? "container container__hidden_space" : "container";
});

</script>
