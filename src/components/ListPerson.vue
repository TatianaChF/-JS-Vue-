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
              @remove-person="
                (name) => {
                  onClickRemovePerson(name);
                }
              "
            ></person-info>
          </v-list-item>
        </v-list>
      </v-card>
      <p v-else>Список людей пуст</p>
    </div>
    <v-btn @click="router.push({ name: 'Dishes' })" variant="tonal"
      >Дальше!</v-btn
    >
  </div>
  <FormPerson
    v-if="isOpen"
    :open="isOpen"
    @change-open="isOpen = false"
    @add-person="
      (person) => {
        person = { id: uuidv4(), name: person };
        personsList.push(person);
        isOpen = false;
      }
    "
  ></FormPerson>
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

const key = "personsData";
let isOpen = ref(false);
let personsList = ref([]);
const personsStore = usePersonsStore();
const router = useRouter();
const personsLocalStorage = localStorage.getItem(key);

if (personsLocalStorage) {
  personsList.value = JSON.parse(personsLocalStorage)._value;
}

defineProps({
  open: Boolean,
  name: String,
});

watch(
  () => personsList,
  (store) => {
    localStorage.setItem(key, JSON.stringify(store));
  },
  { deep: true }
);

const changeStyles = computed(() => {
  return isOpen.value ? "container container__hidden_space" : "container";
});

// функция удаления пользователя
const onClickRemovePerson = (nameRemove) => {
  personsList.value = personsList.value.filter(
    (person) => person.name !== nameRemove
  );
  personsStore.deletePerson(nameRemove);
};
</script>
