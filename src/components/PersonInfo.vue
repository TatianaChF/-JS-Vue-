<template>
  <p>{{ props.person.name }}</p>
  <div>
    <v-btn @click="$emit('removePerson', props.person.id )">
      <v-icon icon="mdi-delete"></v-icon>
    </v-btn>
  </div>
</template>

<script setup>
const props = defineProps(["person"]);
</script>