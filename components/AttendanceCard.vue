<script setup lang="ts">
import type { Attendance } from "~/types";

const props = defineProps<{
  attendance: Attendance;
}>();
</script>

<template>
  <div>
    <h3 class="font-semibold capitalize">
      {{ attendance.modName.toLowerCase() }}
      <UBadge color="white" variant="solid" class="normal-case">
        {{ attendance.modInstanceId }}
      </UBadge>
    </h3>
    <p class="capitalize dark:text-zinc-300 text-sm">
      {{ attendance.session_name.toLowerCase() }}
    </p>
  </div>
</template>
