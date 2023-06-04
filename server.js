const http = require('http');
const PORT = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'content-type' : 'text/plain' });
    res.write('Hello world!');
    res.end()
});

server.listen(PORT, () => {
    console.log('server running at http://localhost:8080');
});