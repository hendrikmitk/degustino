<template>
  <div class="flex items-center justify-center">
    <svg
      class="h-28 w-28 -rotate-90 fill-transparent stroke-current stroke-[3]"
    >
      <circle
        class="text-gusti-orange-light"
        :r="radius"
        :cx="radius + 2"
        :cy="radius + 2"
      />
      <circle
        class="text-gusti-orange-strong"
        :stroke-dasharray="circumference"
        :stroke-dashoffset="circumference - (percent / 100) * circumference"
        stroke-linecap="round"
        :r="radius"
        :cx="radius + 2"
        :cy="radius + 2"
      />
    </svg>
    <div class="absolute flex flex-col items-center">
      <span class="font-roboto text-3xl">0:{{ zeropad(timeLeft, 2) }}</span>
      <span class="text-sm text-gusti-gray-medium">Time</span>
    </div>
  </div>
</template>

<script setup>
import zeropad from '@/functions/zeropad';

const radius = 54;
const circumference = radius * 2 * Math.PI;

defineProps({
  percent: {
    type: Number,
    required: true,
  },
  timeLeft: {
    type: Number,
    required: true,
  },
});
</script>
