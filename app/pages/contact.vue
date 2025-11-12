<template>
  <h1>CONTACT</h1>
  <button @click="setPageLayout('default')">Change Layout</button>
</template>

<script setup>
const titleTemplate = ref("Contact");
setTimeout(() => (titleTemplate.value = "New contact"), 2000);
useHead({
  titleTemplate,
});

definePageMeta({
  layout: "secondary",
});
</script>
