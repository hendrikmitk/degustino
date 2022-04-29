<template>
  <button
    @click="matchColor(shade)"
    :class="[
      'flex aspect-square items-center justify-center rounded-xl',
      isBusy && 'opacity-90 blur-sm',
      isBusy & (shade.id === color.id) &&
        'opacity-100 ring-6 ring-gusti-success ring-offset-2 blur-none',
    ]"
    :style="`background-color: ${shade.hex}`"
  >
    <span class="text-8xl text-gusti-orange-light">{{
      ['A', 'B', 'C', 'D'][index]
    }}</span>
  </button>
</template>

<script setup>
import { useColorState } from '@/composables/colorState';
import { useGameState } from '@/composables/gameState';
import { useStatsState } from '@/composables/statsState';

const { color, initColor } = useColorState();
const { isBusy, toggleIsBusy } = useGameState();
const { loseRound, winRound } = useStatsState();

const matchColor = (selectedColor) => {
  toggleIsBusy();

  selectedColor.id === color.value.id ? winRound() : loseRound();

  setTimeout(() => {
    initColor();
    toggleIsBusy();
  }, 600);
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
