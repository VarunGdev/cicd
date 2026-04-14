const http = require('http');
const server = http.createServer((req,res) => {
    res.end("CI/CD is working");
});

server.listen(3000);