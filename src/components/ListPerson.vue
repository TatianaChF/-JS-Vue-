<template>
  <div :class="changeStyles">
    <v-card class="container__form">
      <v-btn class="container__form__btn" @click="isOpen = true" variant="tonal">Добавить человека</v-btn>
        <v-list class="container container__list-person" lines="three" v-if="personsStore.persons.length > 0">
          <v-list-item 
            v-for="person in personsStore.persons"
            :key="person.id"
            :title="name"
          >
            <person-info 
              :person="person"
              @remove-person="
                (name) => {
                  personsStore.removePerson(name);
                }
              "
            ></person-info>
          </v-list-item>
        </v-list>
      <p v-else>Список людей пуст</p>
    </v-card>
    <v-btn class="btn" @click="router.push({ name: 'Dishes' })" variant="tonal"
      >Дальше!</v-btn
    >
  </div>
  <form-person
    v-if="isOpen"
    :open="isOpen"
    @change-open="isOpen = false"
    @add-person="
      (person) => {
        person = { id: uuidv4(), name: person };
        personsStore.addPerson(person);
        isOpen = false;
      }
    "
  />
</template>

<style lang="scss" scoped>
@import "./../assets/style.scss";
</style>

<script setup>
import { ref, computed, watch } from "vue";
import FormPerson from "./FormPerson.vue";
import PersonInfo from "./PersonInfo.vue";
import { usePersonsStore } from "./../store/persons";
import { useRouter } from "vue-router";
import { v4 as uuidv4 } from "uuid";

let isOpen = ref(false);
const personsStore = usePersonsStore();
const router = useRouter();

defineProps({
  open: Boolean,
  name: String,
});


const changeStyles = computed(() => {
  return isOpen.value ? "container container__hidden_space" : "container";
});

</script>
