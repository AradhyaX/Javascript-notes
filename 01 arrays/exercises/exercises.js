//.length exercise
// Write a function that will tell use how many sheep we have in our field on click of the document.

// hint: use the querySelectorALL method.

function countSheep(){
const allSheep = document.querySelectorAll('.sheep')
console.log(allSheep.length)
}
document.addEventListener('click', countSheep)

//! .shift() exercise
