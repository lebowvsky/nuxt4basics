<template><h1>Contact</h1></template>
<script setup>
// definePageMeta({
//   middleware: ["name"],
// });

definePageMeta({
  middleware: [
    (to, from) => {
      console.log("LOCAL MIDDLEWARE");
    },
    "name",
  ],
});
</script>
