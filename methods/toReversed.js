/*

The toReversed() method of Array instances is the copying counterpart of the reverse() method.

It returns a new array with the elements in reversed order.

toReversed()

*/

const people = ['Mark', 'Ivan', 'Joseph'];

const sortedPeople = people.toReversed();

console.log('Reversed', sortedPeople);
// Reversed [ 'Joseph', 'Ivan', 'Mark' ]

console.log('Original', people);
// Original [ 'Mark', 'Ivan', 'Joseph' ]