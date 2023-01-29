const {readFile, writeFile} = require('fs');

//Read file Asynchronously
readFile('./content/first.txt','utf-8',(err, result)=>{
    if(err){
        console.log(err);
        return;
    }
    const firstFileContent = result;
    readFile('./content/second.txt', 'utf-8', (err, result)=>{
        if(err){
            console.log(err);
            return;
        }
        const secondileContent = result;
        //Write to file Asynchronously
        writeFile(     
            './content/result-async.txt',
            `\nHere is the result: ${firstFileContent}, ${secondileContent}`,
            {flag: 'a'}, //Appends content to the file 
            (err)=>{
             if(err){
                console.log(err);
                return;
            }
        })
    })
})