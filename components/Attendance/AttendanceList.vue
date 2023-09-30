<script setup lang="ts">
import { Attendance } from "~/types";

const attendance = ref<Attendance[]>([]);
</script>

<template>
  <aside
    id="sidebar"
    class="h-screen sm:h-full md:w-96 sm:w-1/2 border border-zinc-200 dark:border-zinc-700 rounded-lg m-1.5 [@media(display-mode:standalone)]:mt-0 p-2 sm:p-3 md:px-3 transition-all overflow-y-scroll flex flex-col gap-2 [&::-webkit-scrollbar]:w-[7px] [&::-webkit-scrollbar-thumb]:bg-zinc-200 [&::-webkit-scrollbar-thumb]:rounded-lg [&::-webkit-scrollbar-thumb]:hover:bg-zinc-300/90 dark:[&::-webkit-scrollbar-thumb]:bg-zinc-800 dark:[&::-webkit-scrollbar-thumb]:rounded-lg dark:[&::-webkit-scrollbar-thumb]:hover:bg-zinc-700"
  >
    <h2 class="font-semibold text-xl sm:text-lg mb-1">Recent Attendance</h2>

    <div
      v-if="attendance.length"
      class="flex flex-col gap-4 divide-y divide-zinc-200 dark:divide-zinc-700"
    >
      <AttendanceCard
        v-for="item in attendance"
        :key="item.createdAt"
        :attendance="item"
        class="pt-3 first:pt-0 last:pb-0"
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
</template>
