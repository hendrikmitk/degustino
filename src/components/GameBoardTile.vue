<template>
  <button
    @click="matchColor(shade)"
    :class="`flex aspect-square items-center justify-center rounded-xl`"
    :style="`background-color: ${shade.hex}`"
  >
    <span class="text-8xl text-gusti-orange-light">{{
      ['A', 'B', 'C', 'D'][index]
    }}</span>
  </button>
</template>

<script setup>
import { useColorState } from '@/composables/colorState';
import { useStatsState } from '@/composables/statsState';

const { color, initColor } = useColorState();
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

defineProps({
  shade: {
    type: Object,
    required: true,
  },
  index: {
    type: Number,
    required: true,
  },
});
</script>
