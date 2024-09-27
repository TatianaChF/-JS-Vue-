<template>
<v-template class="person-container">
<v-container class="person-card">
  <p>{{ props.person.name }}</p>
</v-container>
<div>
    <v-btn class="person-container__btn" @click="removePerson" variant="text">
      <v-icon icon="mdi-delete"></v-icon>
    </v-btn>
</div>
</v-template>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps(["person"]);
const emits = defineEmits(["removePerson"]);
const personName = ref(props.person.name)

const removePerson = () => {
  emits("removePerson", props.person.id);
}
</script>

<style lang="scss" scoped>
@import "./../assets/style.scss";
</style>