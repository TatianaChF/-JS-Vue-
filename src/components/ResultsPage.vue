<template>
  <v-container class="container">
    <v-card title="Результаты">
        <p>Пользователь A кому-то должен?</p>
        <p>Пользователь В кому-то должен?</p>
        <p>Пользователь С кому-то должен?</p>
    </v-card>
    <div class="container__form__btns">
      <v-btn @click="router.push({name: 'Dishes'})" text="Назад"></v-btn>
      <v-btn @click="router.push({name: 'Home'})" text="На главную"></v-btn>
    </div>
  </v-container>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
</script>

<style lang="scss" scoped>
@import "./../assets/style.scss";
</style>
