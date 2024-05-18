const {readFile, writeFile} = require('fs')
console.log('start');

// if we don't provide utf-8 we get buffer
readFile('NodeJS/content/first.txt','utf8', (err,data) => {
    if(err) {
        console.log(err);
        return;
    }
    const first = data
    readFile('NodeJS/content/second.txt', (error,data) => {
        if(error) {
            console.log(error);
            return;
        }
        const second = data
        writeFile(
        'NodeJS/content/result-async.txt', 
        'Hello This is the newly build message',
        (error,data) => {
            if(error) {
                console.log(error);
                return;
            }
            console.log('done with this task');
        })
    })
})

console.log('starting next task');



// npm
// reuse our own code
// reuse code written by other devs
// share our own solutions
// npmjs.com