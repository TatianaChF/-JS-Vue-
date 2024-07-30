<template>
  <p>{{ props.person.firstName }}</p>
  <div>
    <v-btn>
      <v-icon icon="mdi-border-color"></v-icon>
    </v-btn>
    <v-btn>
      <v-icon icon="mdi-delete" @click="$emit('removePerson', props.person.id)"></v-icon>
    </v-btn>
  </div>
</template>

<script setup>
const props = defineProps(["person"]);
</script>