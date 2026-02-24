//? A javaScript function is a block of code designed to perform a particular task.

//! A FUNCTION DECLARATION (defining a function)

function square(number) {
  return number*number;
}

//! A FUNCTION CALL (calling/executing a function)

const result = square(5) // it store return value value of function square to result variable

console.log(result)

// ======================================================
//? function [functionName]([placeholder]
// ======================================================



//! A FUNCTION DECLARATION

function name(parameter){
  //statements
  // have access to "this" keyword
}

//! A FUNCTION EXPRESSION
const name = function(parameter){
  //statements
}

//! An ARROW FUNCTION (Modern way)
const name =(parameter)=> {
  //statements
}


//? a function is executed only when it is called this process is called invocation

function sayHi(name) {
  console.log(`Hi, ${name}`);
}

sayHi(`joe`);


//? Every function in javaScript returns undefined