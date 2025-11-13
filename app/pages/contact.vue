<template>
  <h1>Contact</h1>
  <p>{{ randomNumber(10, 100) }}</p>
  <p>{{ randomName() }}</p>
  <button @click="$alertName('Francis')">Alert</button>
  <hr />
  <p>Red : {{ $red }}</p>
  <p>blue : {{ $blue }}</p>
  <hr />
  <ButtonComponent>Bouton</ButtonComponent>
</template>

<script setup>
const { $red } = useNuxtApp();
console.log($red);
</script>
