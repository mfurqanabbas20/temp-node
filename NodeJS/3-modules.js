// Modules
// CommonJS, every file is module (by default)
// Modules, Encapsulated Code (only share minimum)


const name = require('./4-names')

// console.log(name)

const sayHi = require('./5-utils')

const data = require('./6-alternative-flavor');

// console.log("Data Is",data);

// sayHi("Hi") 
// sayHi(name.john)
// sayHi(name.peter)


require('./7-mind-grenade')