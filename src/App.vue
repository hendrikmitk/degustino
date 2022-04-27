<template>
  <div
    class="flex min-h-screen flex-col space-y-6 bg-gusti-orange-light px-6 py-10 font-raleway text-gusti-gray-strong"
  >
    <div class="flex flex-col space-y-4">
      <h1 class="text-center text-4xl font-bold text-gusti-orange-strong">
        Degustino
      </h1>
      <h2 class="text-center text-2xl">Can you guess the color?</h2>
    </div>

    <GameStats />

    <GameBoard />

    <span class="text-center" @click="resetGame()"> Reset </span>
  </div>
</template>

<script setup>
import { onBeforeMount } from 'vue';
import { useColorState } from '@/composables/colorState';
import { useStatsState } from '@/composables/statsState';
import GameBoard from '@/components/GameBoard.vue';
import GameStats from '@/components/GameStats.vue';

const { initColor } = useColorState();
const { resetStats } = useStatsState();

const resetGame = () => {
  resetStats();
  initColor();
};

onBeforeMount(() => {
  initColor();
});
</script>
