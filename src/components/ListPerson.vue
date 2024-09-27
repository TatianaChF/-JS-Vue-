<template>
  <div :class="changeStyles">
    <v-card class="container__form">
      <v-btn 
        class="container__form__btn" 
        @click="isOpen = true" variant="tonal">
        Добавить человека
      </v-btn>
      <v-list 
        class="container__list-person" 
        lines="three" 
        v-if="personsStore.persons.length > 0">
        <v-list-item 
          v-for="person in personsStore.persons"
          :key="person.id"
          :title="name"
        >
          <person-info 
            :person="person"
            @remove-person="
              (id) => {
                personsStore.removePerson(id);
              }" />
        </v-list-item>
      </v-list>
      <p v-else>Список людей пуст</p>
    </v-card>
    <v-btn 
      class="btn" 
      :to="{ name: 'Dishes' }"
      variant="tonal">
      Дальше!
    </v-btn>
  </div>
  <form-person
    v-if="isOpen"
    :open="isOpen"
    @change-open="isOpen = false"
    @add-person="
      (person) => {
        personsStore.addPerson(person);
        isOpen = false;
      }
    "
  />
</template>

<script setup>
import { ref, computed, watch } from "vue";
import FormPerson from "./FormPerson.vue";
import PersonInfo from "./PersonInfo.vue";
import { usePersonsStore } from "./../store/persons";
import { useRouter } from "vue-router";

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
