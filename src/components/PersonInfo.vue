<template>
    <p>{{ name }}</p>
    <v-btn>
        <v-icon icon="mdi-border-color"></v-icon>
    </v-btn>
    <v-btn>
        <v-icon icon="mdi-delete"></v-icon>
    </v-btn>
</template>

<script setup>
const props = defineProps(['name']);
</script>