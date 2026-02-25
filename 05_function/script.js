//? A javaScript function is a block of code designed to perform a particular task.

//! A FUNCTION DECLARATION (defining a function)

function square(number) {
  return number*number;
}

//! A FUNCTION CALL (calling/executing a function)

const result = square(5) // it store return value of function square to result variable

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

function add(a, b){
  return a + b;
}

const sum = add(2, 2);
console.log(sum);


//=====================================
function test(){
  return true;
  return false;
}

const bool = test();
console.log(bool);

//? if there are multiple return statement only the first one gets executed others get greyed out.


//! ARROW FUNCTION

const square = (number) => {
      return number * number;
}

      const result = square(8);
      console.log(result)


//! PARAMETERS - used when defining a func
//! ARGUMENTS - real values passed when making a func call

const sayHi = (name = 'jane', age = 0) => {
  console.log(`Hi, ${name} is ${age} years old.`);
}

sayHi('joe',25); 
//? name = jane or age = 0 are default paramenters if someone does not pass an argument

const add = (a, b = 0) =>{
  return a + b;

}
const result = add(2);

console.log(result);

//? without default value if we only pass one argument then we will get NAN so we use = 