const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url == '/') {
        res.write("This is Home Page")
        res.end()
    } else if(req.url == "/contact") {
        res.write("This is conatct page")
        res.end()
    } else if(req.url == '/about') {
        res.write("This is About Page")
        res.end()
    } else {
        res.writeHead(404, {
            "Content-type" : "text/html"
        })
        res.write("Page Not Found");
        res.end()
    }
})

server.listen(3000, '127.0.0.1', () => {
    console.log("Server started at port Number 3000");
})