<template>
  <div class="grid touch-manipulation grid-cols-2 gap-6">
    <GameBoardTile
      v-for="(shade, index) in shades"
      :key="shade.id"
      :shade="shade"
      :index="index"
      :class="isBusy && 'opacity-90 blur-sm'"
      :disabled="isBusy"
    />
  </div>
</template>

<script setup>
import { useColorState } from '@/composables/colorState';
import { useGameState } from '@/composables/gameState';
import GameBoardTile from '@/components/GameBoardTile.vue';

const { shades } = useColorState();
const { isBusy } = useGameState();
</script>
