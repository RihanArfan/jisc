<script setup lang="ts">
const code = defineModel<string>({ required: true });

// for every character inputted, replace placeholder with space
// input: "12  " placeholder: "  00"
// allows showing placeholder as user types
const placeholder = computed(() => {
  return "0000".replace(/./g, (_, i) => (code.value[i] ? " " : "0"));
});

const inputFilter = useInputFilter(code);
const pasteFilter = usePasteFilter(code);
</script>

<template>
  <p
    class="pt-2.5 lg:pt-3 xl:pt-3.5 relative not-sr-only font-mono font-bold text-7xl lg:text-8xl xl:text-9xl text-zinc-500/25 dark:text-zinc-700/50 tracking-wider whitespace-pre"
  >
    {{ placeholder
    }}<UInput
      v-model="code"
      class="absolute inset-0 text-zinc-900 dark:text-white"
      :ui="{
        size: {
          xl: 'text-7xl lg:text-8xl xl:text-9xl font-mono font-bold tracking-wider whitespace-pre',
        },
        padding: { xl: 'px-0 py-1' },
        wrapper: 'absolute',
      }"
      variant="none"
      size="xl"
      type="number"
      max="9999"
      min="0"
      @keydown="inputFilter"
      @paste.prevent="pasteFilter"
    />
  </p>
</template>

<style>
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button,
input[type="number"] {
  -webkit-appearance: none;
  margin: 0;
}
</style>
