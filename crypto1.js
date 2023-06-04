const crypto = require('crypto');
const cipher = crypto.createCipher('aes192', 'a password');
var encrypted = cipher.update('welcome to cryptography', 'utf-8', 'hex');
encrypted += cipher.final('hex');

console.log(encrypted);