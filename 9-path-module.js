const path = require('path');

console.log(path.sep);

const filePath = path.join('content', 'subcontent', 'test.txt');
console.log(filePath);

const absolute = path.basename(filePath);
console.log(absolute);

const relative = path.resolve(__dirname, 'content', 'subcontent', 'test.txt');
console.log(relative);