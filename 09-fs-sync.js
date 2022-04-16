const { readFileSync, writeFileSync } = require('fs')

console.log('Start')
//Sync
const first = readFileSync('./subfolder/first.txt', 'utf-8')
const second = readFileSync('./subfolder/second.txt', 'utf-8')
console.log('reading done')
console.log('start sync')

writeFileSync(
    './subfolder/result-sync.txt',
    `Here is the result : ${first}, ${second}`,
    { flag: 'a' }
)
console.log('Finish')

