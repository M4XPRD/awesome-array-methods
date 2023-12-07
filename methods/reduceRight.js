/*

The reduceRight() method of Array instances applies a function against an accumulator and each value of the array (from right-to-left) to reduce it to a single value.

*/

const array1 = [
  [0, 1],
  [2, 3],
  [4, 5],
];

const result = array1.reduceRight((acc, currentValue) =>
  acc.concat(currentValue), []
);

console.log(result);
// [4, 5, 2, 3, 0, 1]