<template>
  <h1>Home</h1>
  <hr />
  <ul v-if="!users.loader.value">
    <li v-for="user in users.names.value" :key="user">{{ user }}</li>
  </ul>
  <p v-else>Loading...</p>

  <button @click="users.addUser">Ajouter</button>
</template>
<script setup>
const users = getUsers("Miles");
console.log(testComp());
</script>
