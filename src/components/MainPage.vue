<template>
    <div class="main-container">
        <h1>Разделить чек</h1>
        <v-btn 
            class="btn__main" 
            :to="{name: 'Persons'}"
            variant="tonal">
            Начать
        </v-btn>
    </div>
</template>

<script setup>
    import { useRouter } from 'vue-router';

    const router = useRouter();
</script>

<style lang="scss" scoped>
    @import './../assets/style.scss'
</style>
