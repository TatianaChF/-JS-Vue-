<template>
  <v-app>
    <div class="container">
      <h1>Разделить чек</h1>
      <v-btn>Начать</v-btn>
    </div>
    <v-btn @click="toggleTheme">Изменить цвет темы</v-btn>
  </v-app>
</template>

<script setup>
import { useTheme } from 'vuetify'

const theme = useTheme()

function toggleTheme () {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}
</script>

<style lang="scss" scoped>
  @import './assets/style.scss'
</style>

