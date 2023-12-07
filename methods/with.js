/*

The with() method of Array instances is the copying version of using the bracket notation to change the value of a given index. 

It returns a new array with the element at the given index replaced with the given value.

arrayInstance.with(index, value)

*/

const people = ['Mark', 'Ivan', 'Joseph'];
const newPeople = people.with(2, 'New');

console.log('New', newPeople);
// New [ 'Mark', 'Ivan', 'New' ]

console.log('Original', people);
// Original [ 'Mark', 'Ivan', 'Joseph' ]