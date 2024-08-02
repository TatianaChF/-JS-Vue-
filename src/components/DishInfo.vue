<template>
  <v-container class="container__card">
    <v-card class="card">
      <p>{{ dish.name }}</p>
      <div class="info__person">
        <h4>Цена:</h4>
        <p>{{ dish.price }}</p>
      </div>
      <div class="info__person">
        <h4>Оплатил:</h4>
        <p>{{ dish.payer }}</p>
      </div>
      <div class="info__person">
        <h4>Кто ел?</h4>
        <p v-for="(person, index) in dish.whoEat" :key="index">{{ person }}</p>
      </div>
    </v-card>
    <v-btn class="container__card__btn" @click="$emit('removeDish', props.dish)">
      <v-icon icon="mdi-delete"></v-icon>
    </v-btn>
  </v-container>
</template>

<script setup>
const props = defineProps(["dish"]);
</script>

<style lang="scss">
.card {
  padding: 20px 40px;
  width: 90%;
}

.info__person {
  display: flex;
  width: 20%;
  gap: 10px;
}

.container__card {
    display: flex;
    justify-content: space-between;

    &__btn {
        align-self: center;
    }
}
</style>
