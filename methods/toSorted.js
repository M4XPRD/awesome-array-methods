/*

The toSorted() method of Array instances is the copying version of the sort() method.

It returns a new array with the elements sorted in ascending order.

toSorted()
toSorted(compareFn)

*/


const people = ['Mark', 'Ivan', 'Joseph'];

/*

const sortedPeople = [...people].sort();

It's much more less performant

*/

const sortedPeople = people.toSorted();

console.log('Sorted', sortedPeople);
// Sorted [ 'Ivan', 'Joseph', 'Mark' ]

console.log('Original', people);
// Original [ 'Mark', 'Ivan', 'Joseph' ]