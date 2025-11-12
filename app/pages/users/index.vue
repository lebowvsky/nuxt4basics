<template>
  <h1>Users Home</h1>
</template>
<script setup>
const route = useRoute();
console.log(route.meta);
useHead(route.meta);
definePageMeta({
  title: "Users",
  meta: [{ name: "description", content: "Some description" }],
});
</script>
