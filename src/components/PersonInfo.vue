<template>
  <v-template 
    class="d-flex justify-sm-center align-center ga-8" 
    width="550" >
    <v-sheet
      class="d-flex justify-sm-center space-around align-center pa-5 bg-brown-lighten-5 border-md rounded"
      width="450">
      <p>{{ props.person.name }}</p>
    </v-sheet>
    <v-btn 
      class="bg-brown-lighten-5" 
      @click="removePerson" 
      variant="text">
      <v-icon icon="mdi-delete" />
    </v-btn>
  </v-template>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps(["person"]);
const emits = defineEmits(["removePerson"]);

const removePerson = () => {
  emits("removePerson", props.person.id);
};
</script>
