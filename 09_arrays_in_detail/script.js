const months = ['January', 'Februrary', 'March', 'April'];

months[2] = 'Not March';

console.log(months);
console.log(months.length);

// for loop
const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday'];
for (let i = 0; i < days.length; i++) {
  console.log(days[i]);
  
}

//! Array Methods

const name = ['jon','Bob','David','Mark'];

//? Array Push - Adds a new element containing the entered value to the end of the array.
names.push('Dean');

console.log(names);

//? Array Pop - Deletes the last element of an array
names.pop();

//* we dont need to add value it will just delete the last element from array.

//? Array Shift - Deletes the first element of an array
names.shift();

//? Array Unshift - Adds a new value to the start of an array
names.unshift('Dean');

//? Array Splice - it adds/remove value in any position of an array
names.Splice(2,0,'Jenny','Johnny');

console.log(names);

//? Array Slice - Copies certain parts of an array into newly created array
const noOneLikesJon = names.slice(1);

console.log(noOneLikesJon);


//! Array forEach -  it performs an action for each element in an array.

const names = ['Jon','Jenny','Johnny'];

for (let i = 0; i<names.length; i++) {
  console.log(i, names[i]);
}

names.forEach((name, i) =>{
console.log(name, i);

});


