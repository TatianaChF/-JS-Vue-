<template>
  <div class="container">
    <v-sheet class="mx-auto" width="300">
      <v-form class="form" v-model="isRules" @submit.prevent>
        <v-text-field
          v-model="person"
          :rules="rules"
          label="Имя"
        ></v-text-field>
        <v-btn 
          class="mt-2" 
          type="submit" 
          variant="tonal" 
          @click="$emit('addPerson', person)" 
          :disabled="!isRules"
          block>Добавить</v-btn>
      </v-form>
    </v-sheet>
    <v-btn variant="text" @click="$emit('changeOpen')">x</v-btn>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps(["open", "id"]);
let person = ref("");
const isRules = ref(false);

const rules = [
  (v) => !!v || "Это поле обязательно"
]; 

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
