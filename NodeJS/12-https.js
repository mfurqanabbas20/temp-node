
const http = require('http')
// create a server object
const server = http.createServer((req,res) => {
    if(req.url === '/') {
        // end the response
        res.end('Welcome to my first application')
    }
    if(req.url === '/about') {
        res.end('Here is our short history')
    }
    res.end(`
    <h1>Oops!</h1>
    <p>We cann't seem to find the page</p>
    <a href='/'>Back to home Page</a>
    `)

})

server.listen(5000)