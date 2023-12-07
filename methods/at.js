/*

The at() method of Array instances takes an integer value and returns the item at that index, allowing for positive and negative integers.

Negative integers count back from the last item in the array.

at(index)

*/

const inventory = [
  { name: "asparagus", type: "vegetables", quantity: 5 },
  { name: "bananas", type: "fruit", quantity: 0 },
  { name: "goat", type: "meat", quantity: 23 },
  { name: "cherries", type: "fruit", quantity: 5 },
  { name: "fish", type: "meat", quantity: 22 },
];

const a = inventory.at(-1);

console.log(a);

// { name: 'fish', type: 'meat', quantity: 22 }

const b = inventory.at(1);

console.log(b);

// { name: 'bananas', type: 'fruit', quantity: 0 }
