const net = require('net');

const server = net.createServer((socket) => {
    socket.write('Welcome to my ai');
    socket.end();
}).on ('error', (e) => {
    if (e) throw e;
});

server.listen(() => {
    address = server.address();
    console.log('Opened server on %j', address);
});