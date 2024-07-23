<template>
  <div class="container">
    <h1>Давайте разделим счет</h1>
    <a href="#">Начать</a>
  </div>
</template>

<style lang="scss" scoped>
  $linkColor: orange;

  .container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }

  .container a {
    text-decoration: none;
    color: black;
    padding: 10px 5px;
    border: 2px solid black;
    border-radius: 10px;
  }

  .container a:hover {
    background-color: black;
    color: white; 
    border: 2px solid $linkColor;
  }
</style>

