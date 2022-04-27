import { readonly, ref } from 'vue';

/* Global state */
const round = ref(1);
const score = ref(0);

export const useStatsState = () => {
  /* Local state */
  const loseRound = () => {
    round.value += 1;
  };

  const winRound = () => {
    round.value += 1;
    score.value += 1;
  };

  const resetStats = () => {
    round.value = 1;
    score.value = 0;
  };

  return {
    round: readonly(round),
    score: readonly(score),
    loseRound,
    winRound,
    resetStats,
  };
};
