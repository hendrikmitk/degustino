<template>
  <div
    class="flex min-h-screen flex-col space-y-6 bg-gusti-orange-light px-6 py-10 font-raleway text-gusti-gray-strong"
  >
    <!-- Title -->
    <div class="flex flex-col space-y-4">
      <h1 class="text-center text-4xl font-bold text-gusti-orange-strong">
        Degustino
      </h1>
      <h2 class="text-center text-2xl">Can you guess the color?</h2>
    </div>

    <!-- Game stats -->
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
            <span class="font-roboto text-3xl">03</span>
            <span>Score</span>
          </div>
          <div
            class="flex flex-1 items-end justify-between px-8 pb-5 text-gusti-gray-medium"
          >
            <span>Round</span>
            <span class="font-roboto text-3xl">05</span>
          </div>
        </div>
      </div>
      <div
        class="rounded-b-xl bg-gusti-orange-medium py-2 text-center text-4xl text-gusti-orange-strong"
      >
        {{ randomShade.name }}
      </div>
    </div>

    <!-- Game board -->
    <div class="grid grid-cols-2 gap-6">
      <button
        v-for="(shade, index) in shades"
        :key="shade.id"
        @click="matchColor(shade)"
        :class="`flex aspect-square items-center justify-center rounded-xl`"
        :style="`background-color: ${shade.hex}`"
      >
        <span class="text-8xl text-gusti-orange-light">{{
          ['A', 'B', 'C', 'D'][index]
        }}</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { onBeforeMount, ref } from 'vue';
import colors from './data/colors';
import randomize from './functions/randomize';

const colorRange = ref(null);
const shades = ref(null);
const randomShade = ref(null);

const loadColors = () => {
  colorRange.value = randomize(colors);
  shades.value = randomize(colorRange.value.shades, 4);
  if (!randomShade.value) {
    randomShade.value = randomize(shades.value);
    return;
  }

  let newRandomShade = randomize(shades.value);
  while (randomShade.value.id === newRandomShade.id) {
    newRandomShade = randomize(shades.value);
  }
  randomShade.value = newRandomShade;
};

const matchColor = (selectedColor) => {
  if (selectedColor.id === randomShade.value.id) {
    console.log('Nice! Good job 👍');
  } else {
    console.log(`Nope, that's ${selectedColor.name} ❌`);
  }
  loadColors();
};

onBeforeMount(() => {
  loadColors();
});

const radius = 54;
const circumference = radius * 2 * Math.PI;
const percent = 75;
</script>
