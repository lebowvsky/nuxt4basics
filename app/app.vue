<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
// useHead({
//   title: "Awesome App",
//   meta: [{ name: "description", content: "Some description..." }],
//   link: [
//     {
//       rel: "stylesheet",
//       href: "https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.8/js/bootstrap.min.js",
//     },
//   ],
// });

useSeoMeta({
  title: "Awesome App",
  ogTitle: "Awesome App",
  description: "some description...",
  ogDescription: "some description...",
});
</script>
