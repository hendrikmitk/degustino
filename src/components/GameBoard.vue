<template>
  <div class="grid touch-manipulation grid-cols-2 gap-6">
    <GameBoardTile
      v-for="(shade, index) in shades"
      :key="shade.id"
      :shade="shade"
      :index="index"
      :disabled="isBusy"
    />
  </div>
</template>

<script setup>
import { useColorState } from '@/composables/colorState';
import GameBoardTile from '@/components/GameBoardTile.vue';

const { shades } = useColorState();
</script>
