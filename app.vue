<script setup lang="ts">
useHead({
  titleTemplate: (title) => (title ? `${title} | JISC` : "JISC"),
  link: [
    {
      rel: "icon",
      type: "image/png",
      href: "/favicon.png",
    },
  ],
});
</script>

<template>
  <div>
    <NuxtLoadingIndicator />
    <NuxtPage />
    <UNotifications />
  </div>
</template>
