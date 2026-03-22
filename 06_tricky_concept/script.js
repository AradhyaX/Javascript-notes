// //! GLOBAL SCOPE
// const nae = 'John';

// const logName = () => {
//   console.log(nae);
// }

// logName();
// //* we can access global scope outside the function



// //! LOCAL SCOPE / FUNCTION SCOPE
// const someFunction = () => {
//   const name = 'jane';

//   console.log(name);
// }

// someFunction();
//* we cannot access local variable outside the local scope

// ANOTHER EXAMPLE - with internal scoping
// const someFunction = () => {
//   const name = 'bella';
//   console.log(name);
// }

// const anotherFunction = () => {
//   const name ='oliver';
//   console.log(name)
// }

// someFunction();
// anotherFunction();


// //!BLOCK SCOPE-
if(true) {
  const name = 'John';

  //console.log(name);
}
console.log(name); // not output becuase it is outside the scope . it behaves similar to local scope

//* here if we did var name we would have got the output this is the reason we have stopped using var.


//! HOISTING IN JAVASCRIPT- it is never used in modern Js bust is important topic in interview

var hoist;
console.log(hoist);
hoist = "Th variable has been hoisted";
// undefined

function hoist(){
  var message = 'test';

  console.log(message0);
}
hoist();
//* always declare at the top



//! CLOSURES IN JAVASCRIPT-

const outer = () {
  const outerVar = 'Hello';

  console.log(outerVar);
}
outer();