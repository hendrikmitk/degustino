/**
 * @param {number} partialValue
 * @param {number} totalValue
 * @returns {number}
 */
export default (partialValue, totalValue) => {
  const percentage = (100 * partialValue) / totalValue;
  return Math.floor(percentage);
};
