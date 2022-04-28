<template>
  <div class="flex flex-1 items-start justify-between px-10 pt-5">
    <span class="font-roboto text-3xl">{{ zeropad(score, 2) }}</span>
    <span class="text-sm">Score</span>
  </div>
  <div
    class="flex flex-1 items-end justify-between px-10 pb-5 text-gusti-gray-medium"
  >
    <span class="text-sm">Round</span>
    <span class="font-roboto text-3xl">{{ zeropad(round, 2) }}</span>
  </div>
</template>

<script setup>
import zeropad from '@/functions/zeropad';

defineProps({
  score: {
    type: Number,
    required: true,
  },
  round: {
    type: Number,
    required: true,
  },
});
</script>
