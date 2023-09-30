<script setup lang="ts">
import { Attendance } from "~/types";

useHead({ title: "Attendance" });

const { $pwa } = useNuxtApp();

const code = ref("");

async function submit() {
  // Do something with data
}

const setFocus = refAutoReset(true, 1);
onKeyStroke((e) => (setFocus.value = false));

const attendance = ref<Attendance[]>([]);
</script>

<template>
  <div
    class="flex sm:h-screen flex-col sm:flex-row text-zinc-800 dark:text-white"
  >
    <aside
      id="sidebar"
      class="order-2 sm:order-1 md:w-96 sm:w-1/2 border border-zinc-200 dark:border-zinc-700 rounded-lg m-1.5 [@media(display-mode:standalone)]:mt-0 p-2 sm:p-3 md:px-3 transition-all overflow-y-scroll flex flex-col gap-2"
    >
      <h2 class="font-bold text-xl mb-2">Recent Attendance</h2>

      <div
        v-if="attendance.length"
        class="flex flex-col gap-2 divide-y divide-zinc-200 dark:divide-zinc-700"
      >
        <AttendanceCard
          v-for="item in attendance"
          :key="item.createdAt"
          :attendance="item"
          class="py-1 first:pt-1 last:pb-0"
        />
      </div>

      <div
        v-else
        class="text-zinc-700 flex flex-col items-center justify-center grow"
      >
        <UIcon name="i-heroicons-calendar-days" class="text-5xl" />
        <p class="font-semibold text-lg mt-2 mb-3">No recent attendance</p>
      </div>
    </aside>

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

<style>
/* width */
#sidebar::-webkit-scrollbar {
  width: 8px;
}

/* Handle */
#sidebar::-webkit-scrollbar-thumb {
  background: theme("colors.zinc.800");
  border-radius: 10px;
}

/* Handle on hover */
#sidebar::-webkit-scrollbar-thumb:hover {
  background: theme("colors.zinc.700");
}
</style>
