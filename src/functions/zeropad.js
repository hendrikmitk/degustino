/**
 * @param {number} num - Number to be zeropadded
 * @param {number} length - Desired total amount of digits
 * @returns {string} - {num} padded with n zero's to {length} digits
 */
export default (num, length) => String(num).padStart(length, '0');
