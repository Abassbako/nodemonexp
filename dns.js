const dns = require('dns');

dns.lookup('Welcome to node.js', (err, addresses, family) => {
    console.log('addresses:', addresses);
    console.log('family:', family);
});