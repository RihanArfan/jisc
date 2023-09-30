<script setup lang="ts">
import type { Attendance } from "~/types";
const props = defineProps<{ attendance: Attendance }>();

const date = new Date(props.attendance.createdAt);
const timeAgo = useTimeAgo(date);
const humanDate = useDateFormat(date, "dddd DD MMMM YYYY");
const universalDate = useDateFormat(date, "YYYY-MM-DD HH:mm");

const isSessionIdentical = computed(() => {
  return props.attendance.session_name.includes(props.attendance.modName);
});
</script>

<template>
  <div class="flex flex-col gap-1">
    <h3 class="font-semibold capitalize text-zinc-700 text-sm">
      {{ attendance.modName.toLowerCase() }}
    </h3>

    <p
      v-if="!isSessionIdentical"
      class="capitalize text-zinc-600 dark:text-zinc-300 text-sm"
    >
      {{ attendance.session_name.toLowerCase() }}
    </p>

    <p class="text-xs text-zinc-400 dark:text-zinc-600">
      <span class="font-mono select-all inline-block">{{
        attendance.modInstanceId
      }}</span>
      •

      <UTooltip :close-delay="100">
        <template #text>
          {{ humanDate }}

          <span class="text-zinc-500"
            >(<span class="select-all inline-block">{{ universalDate }}</span
            >)</span
          >
        </template>

        <time
          class="first-letter:uppercase inline-block"
          :datetime="attendance.createdAt"
        >
          {{ timeAgo }}
        </time>
      </UTooltip>
    </p>
  </div>
</template>
