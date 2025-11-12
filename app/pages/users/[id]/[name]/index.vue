<template>
  <h1>User by ID ({{ $route.params.id }}) and Name {{ $route.params.name }}</h1>
</template>

<script setup>
const route = useRoute();
console.log(route.params.id);
console.log(route.params.name);
</script>
