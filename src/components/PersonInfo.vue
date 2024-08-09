<template>
<v-template class="percon-container">
<v-container class="percon-card">
  <p>{{ props.person.name }}</p>
</v-container>
<div>
    <v-btn class="percon-container__btn" @click="removePerson" variant="text">
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
  emits("removePerson", personName.value);
}
</script>

<style lang="scss" scoped>
@import "./../assets/style.scss";
</style>