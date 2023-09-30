<script setup lang="ts">
const isPwa = useMediaQuery("(display-mode: standalone)");
const toast = useToast();
const { $pwa } = useNuxtApp();

useHead({
  titleTemplate: (title) => {
    if (isPwa.value) return " ";

    return title ? `${title} - JISC` : "JISC";
  },
});

onMounted(() => {
  if ($pwa.needRefresh) {
    toast.add({
      id: "pwa-update",
      title: "New update available",
      icon: "i-heroicons-arrow-up-tray",
      actions: [
        {
          label: "Reload to apply",
          variant: "solid",
          color: "primary",
          click: () => $pwa.updateServiceWorker(),
        },
      ],
      timeout: 0,
      closeButton: null!,
      color: "zinc",
    });
  }

  if ($pwa?.showInstallPrompt) {
    toast.add({
      id: "pwa-install",
      title: "Add to home screen",
      icon: "i-heroicons-arrow-down-tray",
      actions: [
        {
          label: "Install app",
          variant: "solid",
          color: "primary",
          click: () => $pwa.install(),
        },
      ],
      callback: () => $pwa.cancelInstall(),
      timeout: 0,
      color: "zinc",
    });
  }
});
</script>

<template>
  <div>
    <Head>
      <Link rel="icon" href="/favicon.ico" sizes="any" />
      <Link rel="apple-touch-icon" href="/apple-touch-icon-180x180.png" />

      <Meta
        name="theme-color"
        media="(prefers-color-scheme: light)"
        content="#ffffff"
      />
      <Meta
        name="theme-color"
        media="(prefers-color-scheme: dark)"
        content="#ffffff"
      />
    </Head>

    <VitePwaManifest />
    <NuxtLoadingIndicator />
    <NuxtPage />
    <UNotifications />
  </div>
</template>
