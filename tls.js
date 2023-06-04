const tls = require('tls');
function connected(stream) {
    if (stream) {
        stream.write('GET/HTTPS/1.0\n\rHost:encrypted.google.com: 443\n\r\n\r');
    } else {
        console.log('Connection Failed');
    };
};

dummy.socket = tls.connect(443, 'encrypted.google.com', () => {
    dummy.connected = true;
    if (dummy.socket.authorized) {
        dummy.socket.setEncoding('utf-8');
        connected(dummy.socket);
    } else {
        console.log(dummy.socket.authorizationError);
        connected(null);
    };
});

dummy.socket.addListener('data', (data) => {
    console.log(data);
});

dummy.socket.addListener('error', (e) => {
    if (dummy.connected) {
        connected(null);
    } 
    console.log('FAIL');
    console.error(e);
});

dummy.socket.addListener('close', () => {
    // Do something
});