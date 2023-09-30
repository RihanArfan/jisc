import { defineConfig, type Preset } from "@vite-pwa/assets-generator/config";

export const preset: Preset = {
  transparent: {
    sizes: [64, 192, 512],
    padding: 0,
  },
  maskable: {
    sizes: [512],
    resizeOptions: {
      background: "#e85e13",
    },
    padding: 0.2,
  },
  apple: {
    sizes: [180],
    padding: 0,
  },
};

export default defineConfig({
  preset,
  images: ["public/icon.png"],
});
