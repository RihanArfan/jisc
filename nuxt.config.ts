// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxt/ui", "@vueuse/nuxt", "@vite-pwa/nuxt"],

  pwa: {
    registerType: "autoUpdate",

    client: {
      installPrompt: true,
      periodicSyncForUpdates: 1800,
    },

    devOptions: {
      // enabled: true,
      suppressWarnings: true,
    },

    manifest: {
      name: "JISC Attendance",
      short_name: "Attendance",
      description: "Record your attendance for courses with JISC",

      display: "standalone",
      background_color: "#ffffff",
      theme_color: "#ffffff",

      categories: ["education"],

      icons: [
        {
          src: "pwa-64x64.png",
          sizes: "64x64",
          type: "image/png",
        },
        {
          src: "pwa-192x192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "pwa-512x512.png",
          sizes: "512x512",
          type: "image/png",
          purpose: "any",
        },
        {
          src: "maskable-icon-512x512.png",
          sizes: "512x512",
          type: "image/png",
          purpose: "maskable",
        },
      ],
    },
  },

  devtools: { enabled: true },

  vite: {
    vue: {
      script: {
        defineModel: true,
        propsDestructure: true,
      },
    },
  },
});
