const http = require('http');

const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.end('Welcome to our Home Page');
    }
    if(req.url === '/career'){
        res.end('Welcome to our Home Page');
    }
    else{
        res.end(`
        <h1>Oops</h1>
        <p>We can't find the page you have requested!!!</p>
        <a href="/">Back to Home Page</a>`)
    }
})

server.listen(5000);