<template>
  <h1>CARS</h1>
  <p>{{ $route.params.name }}</p>
</template>
<script setup>
const route = useRoute();
console.log(route.params.name[0]);
</script>
