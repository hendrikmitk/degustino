/**
 * @param {[]} arr - Array to pick one or more random elements from
 * @param {number} n - Number of random elements to pick (default: 1)
 */
export default (arr, n = 1) => {
  if (!n || n <= 1) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const randomItem = arr[randomIndex];
    return randomItem;
  }

  const randomItems = [];
  while (randomItems.length < n) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const newItem = arr[randomIndex];
    if (!randomItems.some((item) => item.id === newItem.id)) {
      randomItems.push(newItem);
    }
  }
  return randomItems;
};
