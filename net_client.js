const net = require('net');

const client = net.connect({ port: 54550 }, () => {
    console.log('Hello');
});

client.on('data', (data) => {
    console.log(data.toString());
    client.end();
});

client.on('end', () => {
    console.log('Disconnected from server');
});