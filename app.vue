<script setup lang="ts">
const isDark = usePreferredDark();

useHead({
  titleTemplate: (title) => (title ? `${title} | JISC` : "JISC"),
  link: [
    {
      rel: "icon",
      type: "image/png",
      href: "/favicon.png",
    },
  ],
  meta: [
    {
      name: "theme-color",
      content: isDark.value ? "#121212" : "#ffffff",
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
