import { readonly, ref } from 'vue';

/* Global state */
const isGameOn = ref(false);

export const useGameState = () => {
  /* Local state */
  const startGame = () => {
    isGameOn.value = true;
  };

  const stopGame = () => {
    isGameOn.value = false;
  };

  return {
    isGameOn: readonly(isGameOn),
    startGame,
    stopGame,
  };
};
