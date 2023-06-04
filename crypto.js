// Encryption using Hash
const crypto = require('crypto');
const secret = 'abcdefg';
const hash = crypto.createHmac('sha256', secret)
.update('Hello')
.digest('hex');

console.log(hash);