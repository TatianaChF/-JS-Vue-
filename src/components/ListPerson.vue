<template>
  <div :class="changeStyles">
    <div class="container__form-person">
      <v-btn @click="isOpen = true" variant="tonal">Добавить человека</v-btn>
      <v-card max-width="900">
        <v-list lines="three">
          <v-list-item
            v-for="person in persons"
            :key="person.id"
            :title="name"
          >
            <person-info :name="person.firstName"></person-info>
          </v-list-item>
        </v-list>
      </v-card>
    </div>
    <v-btn variant="tonal">Дальше!</v-btn>
  </div>
  <FormPerson
    v-if="isOpen"
    :open="isOpen"
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

let isOpen = ref(false);
let persons = ref([
    {id: 1, firstName: 'A'},
    {id: 2, firstName: 'B'},
    {id: 3, firstName: 'C'}
]);

defineProps({
  open: Boolean,
  name: String,
});

const changeStyles = computed(() => {
  return isOpen.value ? "container container__hidden_space" : "container";
});

const removePerson = () => {

}
</script>
