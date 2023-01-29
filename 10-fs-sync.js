const {readFileSync, writeFileSync} = require('fs');

// Read file 
const first = readFileSync('./content/first.txt', 'utf-8');
const second = readFileSync('./content/second.txt', 'utf-8');

console.log(first, second);

//Create file if it does not exist or override content in the file with the content
// writeFileSync(
//     './Content/result-sync.txt',
//     `Here is the result : ${first}, ${second}.`
// );

//Append to file already present instead of overriding it 

writeFileSync(
    './Content/result-sync.txt',
    `\nHere is the result : ${first}, ${second}.`,
    {flag: 'a'}
);
