import ButtonComponent from "~/components/ButtonComponent.vue";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide("red", "#ff0000");
  nuxtApp.provide("blue", "#0000ff");

  nuxtApp.provide("alertName", (name) => alert(`Hello, ${name}`));
  nuxtApp.vueApp.component("ButtonComponent", ButtonComponent);
});
