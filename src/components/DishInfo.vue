<template>
  <v-container class="d-flex ga-7">
    <v-card 
      class="bg-white ms-14 border-md" 
      style="width: 80%" 
      rounded
    >
        <h3>{{ dish.name }}</h3>
        <v-container 
          class="ms-auto mr-auto" 
          style="width: 30%"
        >
          <div 
            class="d-flex" 
            style="gap: 15px"
          >
            <h4>Цена:</h4>
            <p>{{ dish.price }}</p>
          </div>
          <div 
            class="d-flex" 
            style="gap: 15px"
          >
            <h4>Оплатил:</h4>
            <p>{{ dish.payer }}</p>
          </div>
          <div 
            class="d-flex" 
            style="gap: 15px"
          >
            <h4>Кто ел?</h4>
            <p 
              v-for="(person, index) in dish.whoEat" 
              :key="index"
            >
              {{ person }}
            </p>
          </div>
        </v-container>
    </v-card>
    <v-btn 
      style="align-self: center" 
      @click="$emit('removeDish', props.dish.id)" 
      variant="text"
    >
      <v-icon icon="mdi-delete" />
    </v-btn>
  </v-container>
</template>

<script setup>
const props = defineProps(["dish"]);
</script>

