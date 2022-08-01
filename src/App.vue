<template>
  <div
    class="min-h-screen bg-gusti-orange-light px-6 py-8 font-raleway text-gusti-gray-strong md:py-4"
  >
    <div class="flex flex-col space-y-4 md:mx-auto md:w-[375px]">
      <div class="flex flex-col space-y-4">
        <h1 class="text-center text-4xl font-bold text-gusti-orange-strong">
          Degustino
        </h1>
        <GameStats />
      </div>

      <GameBoard v-if="isGameOn" />
    </div>
  </div>
</template>

<script setup>
import { useGameState } from '@/composables/gameState';
import GameBoard from '@/components/GameBoard.vue';
import GameStats from '@/components/GameStats.vue';

const { isGameOn } = useGameState();
</script>
