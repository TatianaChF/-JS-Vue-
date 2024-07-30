<template>
  <p v-if="!isOpenEditForm">{{ props.person.firstName }}</p>
  <div>
    <v-btn @click="$emit('removePerson', props.person.id)">
      <v-icon icon="mdi-delete"></v-icon>
    </v-btn>
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps(["person"]);

</script>