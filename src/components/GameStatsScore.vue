<template>
  <div class="flex flex-1 items-start justify-between space-x-2 px-10 pt-5">
    <span class="font-roboto text-3xl leading-none">{{
      zeropad(score, 2)
    }}</span>
    <span class="text-sm">Score</span>
  </div>
  <div
    class="flex flex-1 items-end justify-between space-x-2 px-10 pb-5 text-gusti-gray-medium"
  >
    <span class="text-sm">Round</span>
    <span class="font-roboto text-3xl leading-none">{{
      zeropad(round, 2)
    }}</span>
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
