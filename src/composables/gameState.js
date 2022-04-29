import { readonly, ref } from 'vue';

/* Global state */
const isGameOn = ref(false);
const isBusy = ref(false);

export const useGameState = () => {
  /* Local state */
  const startGame = () => {
    isGameOn.value = true;
  };

  const stopGame = () => {
    isGameOn.value = false;
  };

  const toggleIsBusy = () => {
    isBusy.value = !isBusy.value;
  };

  return {
    isGameOn: readonly(isGameOn),
    isBusy: readonly(isBusy),
    startGame,
    stopGame,
    toggleIsBusy,
  };
};
