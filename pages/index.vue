<script setup lang="ts">
useHead({ title: "Attendance" });

const code = ref("");

async function submit() {
  // Do something with data
}
</script>

<template>
  <div class="flex h-screen flex-col sm:flex-row">
    <main class="flex grow items-center justify-center relative">
      <NavBar />

      <form @submit.prevent="submit">
        <CodeInput v-model="code" ref="input" />
      </form>

      <Footer />
    </main>

    <aside
      class="md:w-96 sm:w-1/2 border border-zinc-200 dark:border-zinc-800 rounded-lg m-1 p-3 sm:p-4 md:px-4 transition-all"
    >
      <h2 class="font-bold text-xl">Activity</h2>
    </aside>
  </div>
</template>
