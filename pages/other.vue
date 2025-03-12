<script setup lang="ts">
// defineI18nRoute({
//   paths: {
//     de: '/andere',
//     en: '/other',
//   },
// });
defineRouteRules({
  robots: false,
});
</script>

<template>
  <h1>Other page, this should NOT be indexed</h1>
  <NuxtLinkLocale to="index" style="margin-top: 20px">To mainpage</NuxtLinkLocale>
</template>