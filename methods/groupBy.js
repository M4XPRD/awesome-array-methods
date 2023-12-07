/*

The Object.groupBy() static method groups the elements of a given iterable according to the string values returned by a provided callback function.

The returned object has separate properties for each group, containing arrays with the elements in the group.

This method should be used when group names can be represented by strings.

If you need to group elements using a key that is some arbitrary value, use Map.groupBy() instead.

Object.groupBy(items, callbackFn)

*/

const inventory = [
  { name: "asparagus", type: "vegetables", quantity: 5 },
  { name: "bananas", type: "fruit", quantity: 0 },
  { name: "goat", type: "meat", quantity: 23 },
  { name: "cherries", type: "fruit", quantity: 5 },
  { name: "fish", type: "meat", quantity: 22 },
];

const result = Object.groupBy(inventory, ({ type }) => type);

console.log(result);

/* Result is:
{
  vegetables: [
    { name: 'asparagus', type: 'vegetables', quantity: 5 },
  ],
  fruit: [
    { name: "bananas", type: "fruit", quantity: 0 },
    { name: "cherries", type: "fruit", quantity: 5 }
  ],
  meat: [
    { name: "goat", type: "meat", quantity: 23 },
    { name: "fish", type: "meat", quantity: 22 }
  ]
}
*/