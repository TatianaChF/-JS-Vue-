<template>
  <p>{{ name }}</p>
  <div>
    <v-btn>
      <v-icon icon="mdi-border-color"></v-icon>
    </v-btn>
    <v-btn>
      <v-icon icon="mdi-delete"></v-icon>
    </v-btn>
  </div>
</template>

<script setup>
const props = defineProps(["name"]);
</script>