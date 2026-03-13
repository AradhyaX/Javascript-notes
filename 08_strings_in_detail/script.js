// const name = 'Johm';
// // console.log(name.length);

// const firstLetter = name[0];
// const lastLetter = name[3];

// console.log(firstLetter, lastLetter);


//! UPPERCASE and lowercase letters

const mixedCaseString = 'Hello! How are you?';

const lowerCaseString = mixedCaseString.toLowerCase();
const upperCaseString = mixedCaseString.toUpperCase();


console.log(upperCaseString);


//! Searching for a Substring

const hobbies = 'I love HTML, CSS and JavaScript.';

// indexOf()
const index = hobbies.lastIndexOf('JavaScript');

// last IndexOf()
const lastIndex = hobbies.lastIndexOf('JavaScript');

//includes()
const includesJavaScript = hobbies.includes('react');

// startWith()
console.log(hobbies.startsWith('I love'));
// endsWith()
console.log(hobbies.endsWith('JavaScript.'));
