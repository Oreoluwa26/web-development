const http = require("http");

const server = http.createServer((req, res) => {
    if(req.url == '/' && req.method == 'POST'){
        console.log("Request made to root direct")
        console.log()
        res.write("Welcome to my website")
        res.end();
    }

});

const port = 5500;

server.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})