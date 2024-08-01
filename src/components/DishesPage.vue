<template>
  <v-container class="container container__form">
    <v-btn
      text="Добавить блюдо"
    />
    <dish-card
    />
    <div class="container__form__btns">
      <v-btn
        text="Назад"
      />
      <v-btn
        text="Рассчитать"
      />
    </div>
    <v-card class="h4-dish-page">
      <h4>Итог:</h4>
      <h4 class="h4-red">0</h4>
    </v-card>
  </v-container>
</template>

<script setup></script>

<style lang="scss" scoped>
@import "./../assets/style.scss";
</style>
