<template>
  <v-container class="dishes__container-card">
    <v-card class="dishes__card">
        <h3>{{ dish.name }}</h3>
        <v-container class="dishes dishes__text">
          <div class="dishes__info">
            <h4>Цена:</h4>
            <p>{{ dish.price }}</p>
          </div>
          <div class="dishes__info">
            <h4>Оплатил:</h4>
            <p>{{ dish.payer }}</p>
          </div>
          <div class="dishes__info">
            <h4>Кто ел?</h4>
            <p v-for="(person, index) in dish.whoEat" :key="index">{{ person }}</p>
          </div>
        </v-container>
    </v-card>
    <v-btn 
      class="dishes__container-card__btn" 
      @click="$emit('removeDish', props.dish.id)" 
      variant="text">
      <v-icon icon="mdi-delete" />
    </v-btn>
  </v-container>
</template>

<script setup>
const props = defineProps(["dish"]);
</script>

