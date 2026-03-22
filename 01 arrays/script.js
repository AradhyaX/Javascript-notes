//! Arrays
// Arrays can hold more than one value. You can identify them by their square brackets.

// Put the name Jisoo, Jennie , Rose and Lisa into the array

const girlband = ['Jisoo', 'Jennie', 'Rose', 'Lisa'] 

//! Array Object
 const animals = Array('meow', 'jerry', 'tom', 'bhaw')
 console.log(animals)



//! .length
const palces = Array('mayur', 'vihar', 'phase', 'south')
console.log(palces.length) 



//!  .shift() - it removes the first element in the array
const boyBand = ['Zayn', 'Harry', 'Niall', 'Liam', 'Louis']
const soloArtist = boyBand.shift()

console.log(boyBand)
// Will return ['Harry', 'Niall', 'Liam', 'Louis']



//! .unshift() - it adds one or more element to an array.
const boyBand2 = ['Niall', 'Liam', 'Louis']
boyBand2.unshift('Zayn', 'Harry')

console.log(boyBand2)
// Will return ['Zayn', 'Harry', 'Niall', 'Liam', 'Louis']



//! .concat() - it merges two or more arrays together
const vegetables = ['carrot', 'potato', 'cauliflower']
const fruits = ['apple', 'pear', 'orange']
const food = vegetables.concat(fruits)

console.log(food)
// [ 'carrot', 'potato', 'cauliflower', 'apple', 'pear', 'orange' ]



//! .join() - it creates a string from the element in an array.
const movies = ['Jaws', 'Ghostbusters', 'Minions', 'Gattaca']

console.log(movies.join())
// returns 'Jaws, Ghostbusters, Minions, Gattaca'


//! .sort() - it sorts an array.it's default is in ascending order

const names = ['Drew', ' Ash', 'Kolade', 'Xen']
names.sort()

console.log(names)
// return ['Ash', 'Drew', 'Kolade', 'Xen']

//Todo  FOR NUMBERS
const ages = [34,620,12,90]
ages.sort((a,b) => a - b)
console.log(ages)


//! .pop() - it removes the last element in an array

const toDos = ['wash up', 'call mum', 'take out bins']
toDos.pop()

console.log(toDos)
// returns ['wash up', 'call mum']


//! .push() - we can add one or more item in the end of an array

const toDos2 = ['wash up', 'call mum', 'take out bins']
toDos2.push('fix desk', 'iron shirt')

console.log(toDos2)
// returns ['wash up', 'call mum', 'take out bins', 'fix desk', 'iron shirt']
