<template>
  <div :class="changeStyles">
    <v-card class="d-flex flex-sm-column align-center justify-center ga-3 mb-20 rounded-lg bg-brown-lighten-5">
      <v-btn 
        class="position-relative mt-9 bg-brown-lighten-3" 
        @click="isOpen = true" 
        variant="tonal">
        Добавить человека
      </v-btn>
      <v-list 
        class="d-flex flex-sm-column bg-brown-lighten-5 rounded-lg mb-5" 
        width="1000"
        lines="three" 
        v-if="persons.length > 0">
        <v-list-item 
          v-for="person in persons"
          :key="person.id"
          :title="name"
        >
          <person-info 
            :person="person"
            @remove-person="(id) => removePerson(id)" />
        </v-list-item>
      </v-list>
      <p v-else>Список людей пуст</p>
    </v-card>
    <v-btn 
      class="position-relative mt-9 bg-brown-lighten-3" 
      :to="{ name: 'Dishes' }"
      variant="text">
      Дальше!
    </v-btn>
  </div>
  <form-person
    v-if="isOpen"
    :open="isOpen"
    @change-open="isOpen = false"
    @add-person="(person) => addPerson(person)" />
</template>

<script setup>
import { ref, computed, watch } from "vue";
import FormPerson from "../components/FormPerson.vue";
import PersonInfo from "../components/PersonInfo.vue";
import { usePersonsStore } from "../store/persons";
import { useRouter } from "vue-router";
import { storeToRefs } from 'pinia';

let isOpen = ref(false);
const personsStore = usePersonsStore();
const { persons } = storeToRefs(personsStore);
const router = useRouter();

defineProps({
  open: Boolean,
  name: String,
});

personsStore.$subscribe((mutation, state) => {
  localStorage.setItem("persons", JSON.stringify(state.persons));
})

const changeStyles = computed(() => {
  return isOpen.value ? "container container__hidden_space" : "container";
});

const removePerson = (id) => {
  personsStore.removePerson(id);
}

const addPerson = (person) => {
  personsStore.addPerson(person);
  isOpen.value = false;
}

</script>
