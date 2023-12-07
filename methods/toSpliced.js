/*

The toSpliced() method of Array instances is the copying version of the splice() method.

It returns a new array with some elements removed and/or replaced at a given index.

toSpliced(start)
toSpliced(start, deleteCount)
toSpliced(start, deleteCount, item1)
toSpliced(start, deleteCount, item1, item2)
toSpliced(start, deleteCount, item1, item2, ... itemN)

*/

const people = ['Mark', 'Ivan', 'Joseph'];

const sortedPeople = people.toSpliced(0, 2, 'Yuri');

console.log('Copy', sortedPeople);
// Copy [ 'Yuri', 'Joseph' ]

console.log('Original', people);
// Original [ 'Mark', 'Ivan', 'Joseph' ]