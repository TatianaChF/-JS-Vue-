<template>
  <p>{{ props.person.name }}</p>
  <div>
    <v-btn @click="removePerson">
      <v-icon icon="mdi-delete"></v-icon>
    </v-btn>
  </div>
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