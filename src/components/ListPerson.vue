<template>
    <div class="container">
        <div class="container__form-person">
            <v-btn variant="tonal">Добавить человека</v-btn>
            <v-list lines="one">
                <v-list-item
                    v-for="n in 6"
                    :key="n"
                    :title="'Item ' + n"
                    subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit"
                ></v-list-item>
            </v-list>
        </div>
        <v-btn variant="tonal">Дальше!</v-btn>
    </div>
</template>

<style lang="scss" scoped>
    @import './../assets/style.scss'
</style>