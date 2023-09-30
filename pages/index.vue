<script setup lang="ts">
useHead({ title: "Attendance" });

const { $pwa } = useNuxtApp();

const code = ref("");

async function submit() {
  // Do something with data
}

const setFocus = refAutoReset(true, 1);
onKeyStroke((e) => (setFocus.value = false));
</script>

<template>
  <div
    class="flex sm:h-screen flex-col sm:flex-row text-zinc-800 dark:text-white"
  >
    <AttendanceList />

    <main
      class="order-1 sm:order-2 flex grow items-center justify-center relative h-screen"
      @click="setFocus = false"
    >
      <NavBar />

      <form @submit.prevent="submit">
        <CodeInput v-model="code" ref="input" v-model:set-focus="setFocus" />
      </form>

      <Footer
        class="[@media(display-mode:standalone)]:hidden"
        :class="{ hidden: !$pwa?.needRefresh }"
      />
    </main>
  </div>
</template>
