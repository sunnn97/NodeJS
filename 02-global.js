/* GLOBALS - NO WINDOW !!!

1) __dirname  - path to current directory
2) __filename - file name
3) require    - function to use modules (CommonJS)
4) module     - info about current module (file)
5) process    - info about env where the program is being executed

*/

console.log(__dirname)
console.log(__filename)
console.log(require)
console.log(module)
console.log(process)

setInterval(()=>{
    console.log('Hello World')
}, 3000)