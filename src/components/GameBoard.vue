<template>
  <div class="grid touch-manipulation grid-cols-2 gap-6">
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
</template>

<script setup>
import { useColorState } from '@/composables/colorState';
import { useStatsState } from '@/composables/statsState';

const { color, shades, initColor } = useColorState();
const { loseRound, winRound } = useStatsState();

const matchColor = (selectedColor) => {
  if (selectedColor.id === color.value.id) {
    console.log('Nice! Good job 👍');
    winRound();
  } else {
    console.log(`Nope, that's ${selectedColor.name} ❌`);
    loseRound();
  }
  initColor();
};
</script>
