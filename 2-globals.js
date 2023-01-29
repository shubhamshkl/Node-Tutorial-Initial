// GLOBALS - NO WINDOW !!!

// __dirname - path to current directory
// __filename - file name
// require - function to use modules (commonJS)
// module - info about current module (file)
// process - info bout env where the program is being executed

console.log(__dirname);
console.log(__filename);
console.log(require);
console.log(module);
console.log(process);

setInterval(() => {
    console.log('Hello World!');
}, 1000);
