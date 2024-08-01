<template>
  <div class="container">
    <v-sheet class="mx-auto" width="500">
      <v-form class="form" @submit.prevent>
        <v-text-field v-model="person" :rules="rules" label="Название блюда" />
        <v-text-field v-model="person" :rules="rules" label="Цена" />
        <v-select
          :items="personsStore.persons.map((person) => person)"
          label="Кто платил?"
        />
        <v-btn-toggle>
          <p>Кто ел?</p>
          <div v-for="(person, index) in personsStore.persons" :key="index">
            <v-btn>{{ person }}</v-btn>
          </div>
        </v-btn-toggle>
        <v-btn
          class="mt-2"
          type="submit"
          variant="tonal"
          @click="$emit('addPerson', person)"
          block
          >Добавить</v-btn
        >
      </v-form>
    </v-sheet>
    <v-btn variant="text" @click="$emit('changeOpenFormDishes')">x</v-btn>
  </div>
</template>

<script setup>
import { usePersonsStore } from "./../store/persons";

const personsStore = usePersonsStore();
</script>

<style lang="scss" scoped>
.form {
  padding: 20px 30px;
  border: 1px solid grey;
}

.container {
  display: flex;
  flex-direction: row;
}
</style>
