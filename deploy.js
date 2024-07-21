//simple http server to deploy

const http = require("http");
const server = http.createServer((req, res) => {
    res.writeHead(200);
    res.end("<h1>Hello pixelvans, you deployed your first server</h1>")
});

const PORT = process.env.PORT || 3000;

server.listen(PORT,()=> console.log("server is running on port 3000"))