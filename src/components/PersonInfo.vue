<template>
  <p>{{ props.person }}</p>
  <div>
    <v-btn @click="$emit('removePerson', props.person )">
      <v-icon icon="mdi-delete"></v-icon>
    </v-btn>
  </div>
</template>

<script setup>
const props = defineProps(["person"]);
</script>