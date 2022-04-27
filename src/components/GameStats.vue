<template>
  <div>
    <div class="flex h-36 rounded-t-xl bg-white py-4">
      <div class="flex flex-1 justify-center">
        <div
          class="inline-flex h-28 w-28 items-center justify-center overflow-hidden rounded-full"
        >
          <svg class="h-full w-full -rotate-90">
            <circle
              class="fill-transparent stroke-current stroke-[3] text-gray-300"
              :r="radius"
              :cx="radius + 2"
              :cy="radius + 2"
            />
            <circle
              class="fill-transparent stroke-current stroke-[3] text-gusti-orange-strong"
              :stroke-dasharray="circumference"
              :stroke-dashoffset="
                circumference - (percent / 100) * circumference
              "
              stroke-linecap="round"
              :r="radius"
              :cx="radius + 2"
              :cy="radius + 2"
            />
          </svg>
          <div class="absolute flex flex-col items-center">
            <span class="text-xl">{{ percent }}%</span>
            <span>Time</span>
          </div>
        </div>
      </div>
      <div class="flex flex-1 flex-col">
        <div class="flex flex-1 items-start justify-between px-8 pt-5">
          <span class="font-roboto text-3xl">{{ zeropad(score, 2) }}</span>
          <span>Score</span>
        </div>
        <div
          class="flex flex-1 items-end justify-between px-8 pb-5 text-gusti-gray-medium"
        >
          <span>Round</span>
          <span class="font-roboto text-3xl">{{ zeropad(round, 2) }}</span>
        </div>
      </div>
    </div>
    <div
      class="rounded-b-xl bg-gusti-orange-medium py-2 text-center text-4xl text-gusti-orange-strong"
    >
      {{ color.name }}
    </div>
  </div>
</template>

<script setup>
import { useColorState } from '../composables/colorState';
import { useStatsState } from '../composables/statsState';
import zeropad from '../functions/zeropad';

const { color } = useColorState();
const { round, score } = useStatsState();

const radius = 54;
const circumference = radius * 2 * Math.PI;
const percent = 75;
</script>
