// fs sync 
// async non-blocking
// sync which is going to be blocking
const { readFileSync, writeFileSync } = require('fs')
    console.log('start');
    const first = readFileSync('NodeJS/content/first.txt', 'utf-8')
    const second = readFileSync('NodeJS/content/second.txt','utf8')
    console.log(first,second);
// file name, value that we want to pass

writeFileSync('NodeJS/content/result-sync.txt',
 `Here is the result : ${first}, ${second}`,
 {flag: 'a'}
 )

// flag: 'a'  means node will append it
console.log('done with this task');
console.log('starting the next one');

