<template>
  <div class="form form__container">
    <v-sheet 
      class="mx-auto" 
      width="300"
    >
      <v-form 
        class="form form__add-person" 
        v-model="isRules" 
        @submit.prevent
      >
        <v-text-field
          v-model="person"
          :rules="rules"
          label="Имя" 
        />
        <v-btn 
          class="btn" 
          type="submit" 
          variant="tonal" 
          @click="onClickAddPerson(person)" 
          :disabled="!isRules"
          block
        >
          Добавить
        </v-btn>
      </v-form>
    </v-sheet>
    <v-btn 
      variant="text"
      @click="emits('changeOpen')"
    >
      x
    </v-btn>
  </div>
</template>

<script setup>
import { ref } from 'vue';

let person = ref("");
const isRules = ref(false);
const emits = defineEmits(["addPerson", "changeOpen"]);

const onClickAddPerson = (person) => {
  emits("addPerson", person)
}

const rules = [
  (v) => !!v || "Это поле обязательно"
]; 

</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: row;
}
</style>
