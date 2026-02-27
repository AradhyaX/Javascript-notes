//! GLOBAL SCOPE
const nae = 'John';

const logname = () => {
  console.log(nae);
}

logname();

//! LOCAL SCOPE / FUNCTION SCOPE
const someFunction = () => {
  const name = 'jane';

  console.log(name);
}

someFunction();





//!BLOCK SCOPE
if (true) {
  let blockVar = 'I am block scoped';
  console.log(blockVar);
}