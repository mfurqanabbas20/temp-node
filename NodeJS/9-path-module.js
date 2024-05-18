const path = require('path')

console.log(path.sep);

// platform specific separator

const filePath = path.join('/content','subfolder','test.txt')

console.log(filePath);

const base = path.basename(filePath)

console.log(base);

const absolute = path.resolve('content','subfolder','test.txt')

console.log(absolute);
console.log(__dirname);
