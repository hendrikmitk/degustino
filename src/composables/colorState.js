import { readonly, ref } from 'vue';
import colors from '@/data/colors';
import randomize from '@/functions/randomize';

/* Global state */
const color = ref(null);
const shades = ref(null);
const buffer = ref([]);

export const useColorState = () => {
  /* Local state */
  const initColor = () => {
    const spectrum = randomize(colors);
    shades.value = randomize(spectrum.shades, 4);
    if (!color.value) {
      color.value = randomize(shades.value);
      return;
    }

    let newColor = randomize(shades.value);
    while (color.value.id === newColor.id) {
      newColor = randomize(shades.value);
    }

    if (buffer.value.includes(newColor.name)) return initColor();
    buffer.value.push(newColor.name);

    color.value = newColor;
  };

  const clearBuffer = () => {
    buffer.value = [];
  };

  return {
    color: readonly(color),
    shades: readonly(shades),
    buffer: readonly(buffer),
    initColor,
    clearBuffer,
  };
};
