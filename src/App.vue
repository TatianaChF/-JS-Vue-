<template>
  <v-app>
    <v-container>
      <v-responsive>
        <div class="container">
          <h1>Давайте разделим счет</h1>
          <a href="#">Начать</a>
        </div>
      </v-responsive>
    </v-container>
  </v-app>
</template>

<script setup>
  import { useTheme } from 'vuetify';

  const theme = useTheme();
</script>

<style lang="scss" scoped>
  @import './assets/style.scss'
</style>

