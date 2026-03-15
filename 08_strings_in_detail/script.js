// const name = 'Johm';
// // console.log(name.length);

// const firstLetter = name[0];
// const lastLetter = name[3];

// console.log(firstLetter, lastLetter);

//* const lastLetter = name[name.lenght -1] hamesha koi bhi string ka last letter dega yeh


//! UPPERCASE and lowercase letters

// const mixedCaseString = 'Hello! How are you?';

// const lowerCaseString = mixedCaseString.toLowerCase();
// const upperCaseString = mixedCaseString.toUpperCase();


// console.log(upperCaseString);


// //! Searching for a Substring

// const hobbies = 'I love HTML, CSS and JavaScript.';

// // indexOf()
// const index = hobbies.lastIndexOf('JavaScript');

// // last IndexOf()
// const lastIndex = hobbies.lastIndexOf('JavaScript');


// //* we mostly use  includes because it is boolean value it will return true or false.   hobbies.includes

// //includes()
// const includesJavaScript = hobbies.includes('react');

// // startWith()
// console.log(hobbies.startsWith('I love'));
// // endsWith()
// console.log(hobbies.endsWith('JavaScript.'));



// //! Getting a Substring
// const exampleString = 'hotdog';


// //? slice();
// const hot = exampleString.slice(0,3)
// //* we should know index of which poisition of string we want to separate

// console.log(hot);



// //! Split a String
// const exampleString = 'dog';

// //? split()
//  const letters = exampleString.split('');

//  console.log(letters);

//  //* is string is a line like 'i have a dog' we will just add another space in split(' ')



//  //! Reverse a string 
//  const exampleString = 'test'; //tset

//  //* we cant you .reverse to reverse a string fist we need to split it into array and then only we can use reverse  because 'reverse is array method' and then we need to join it.

//  const reversedString = exampleString.split("").reverse().join("");
//  console.log(reversedString);



//  //! Repeat a string
//  //? repeat()

//  const dogSays = 'woof';

//  console.log(dogSays.repeat(5))



//  //! Trim a string
//  //? trim()

//  const exampleString = '     Hello World!    ';
//  console.log(exampleString.trim());



 //TODO STRING EXERCISE
 // Guests
const guestList = 'Our guests are: emma, jacob, isabella, ethan';

//? 1. Get a length of the string. Store it in a variable called length.
const length = guestList.length;
console.log(length)


//? 2. Uppercase the entire string.
// Store the result in a variable called uppercasedGuestList.

const uppercasedGuestList = guestList.toUpperCase();
console.log(uppercasedGuestList)


//? 3. Check whether 'ETHAN' is on the uppercasedGuestList.
// Store the answer in a variable called isEthanOnTheList.
// The data type of the variable must be a boolean.

const uppercasedGuestList = guestList.toUpperCase();
console.log(uppercasedGuestList)
const isEthanOnTheList = uppercasedGuestList.includes('ETHAN');
console.log(isEthanOnTheList)


//? 4. Create a substring that only contains the following:
// 'EMMA, JACOB, ISABELLA, ETHAN'
// Store the answer in a variable called substringGuests.

const substringGuests = uppercasedGuestList.slice(16)
console.log(substringGuests);

//? 5. Out of the substring you just created,
// create an array of names of people that are on the list.
// Store that array in a variable called guests.

const guests = substringGuests.split(",");
console.log(guests);

