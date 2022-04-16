//CommonJS, every file is module (by default)
// Module - Encapsulated Code (only share minimum)

/*
const secret = 'Super Secret'
const john = 'john'
const peter = 'peters'

const sayHi = (name) => {
    console.log(`Hello there ${name}`)
}
*/

const names = require('./04-names')
const sayHi = require('./05-utils')
const data  = require('./06-alternative-flavor')
require('./07-minsw-grenade')
//console.log(data)

//sayHi('Susan')
//sayHi(names.john)
//sayHi(names.peter)
//sayHi(secret)