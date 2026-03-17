const months = ['January', 'Februrary', 'March', 'April'];

months[2] = 'Not March';

console.log(months);
console.log(months.length);

// for loop
const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday'];
for (let i = 0; i < days.length; i++) {
  console.log(days[i]);
  
}


const name = ['jon','Bob','David','Mark'];

//! Array Push - Adds a new element containing the entered value to the end of the array.

names.push('Dean');

console.log(length);

//! Array Pop - Deletes the last element of an array
names.pop();

//! Array Shift - Deletes the first element of an array
names.shift();

//! Array Unshift - Adds a new value to the start of an array
names.unshift('Dean');

//! Array Splice
names.Splice(2,2,'Jenny','Johnny');

console.log(names);
