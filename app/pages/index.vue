<template>
  <h1>Home</h1>
  <button @click="router.push('/contact')">Go to contact</button>
</template>

<script setup>
const router = useRouter();
</script>
