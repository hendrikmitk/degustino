<template>
  <div>
    <div class="flex h-36 rounded-t-xl bg-white py-4">
      <div class="flex flex-1 justify-center">
        <GameStatsTimer :percent="percent" :timeLeft="timeLeft" />
      </div>
      <div class="flex flex-1 flex-col">
        <GameStatsScore :round="round" :score="score" />
      </div>
    </div>
    <div
      class="flex items-center justify-center rounded-b-xl bg-gusti-orange-medium py-2"
    >
      <span class="text-2xl text-gusti-orange-strong" v-if="isGameOn">
        {{ color.name }}
      </span>
      <button
        class="h-full w-full text-2xl"
        @click="startButtonHandler()"
        v-else
      >
        Start
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import GameStatsScore from '@/components/GameStatsScore.vue';
import GameStatsTimer from '@/components/GameStatsTimer.vue';
import { useColorState } from '@/composables/colorState';
import { useGameState } from '@/composables/gameState';
import { useStatsState } from '@/composables/statsState';
import getPercentage from '@/functions/getPercentage';

const { color, initColor } = useColorState();
const { isGameOn, startGame, stopGame } = useGameState();
const { round, score, resetStats } = useStatsState();

const duration = 20; // NOTE: Timer duration (seconds)
const percent = ref(0); // NOTE: Circular countdown progress
const timeLeft = ref(duration);

const startButtonHandler = () => {
  resetStats();
  initColor();
  startGame();
};

watch(isGameOn, () => {
  if (!isGameOn.value) return;

  const timer = setInterval(() => {
    timeLeft.value -= 1;
    percent.value = 100 - getPercentage(timeLeft.value, duration);

    if (timeLeft.value <= 0) {
      clearInterval(timer);
      stopGame();
      percent.value = 0;
      timeLeft.value = duration;
    }
  }, 1000);
});
</script>
