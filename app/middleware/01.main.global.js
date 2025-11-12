export default defineNuxtRouteMiddleware((to, from) => {
  console.log("MAIN MIDDLEWARE");
  //   if (to.path === "/contact") {
  //     return abortNavigation();
  //   }

  //   if (to.path === "/contact") {
  //     return navigateTo("/");
  //   }
});
