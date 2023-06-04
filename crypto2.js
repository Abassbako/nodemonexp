const crypto = require('crypto');
const decipher = crypto.createDecipher('aes192', 'a password');
var encrypted = '90098c63df4157d6e75e2afbbf0fc805e858b07084c9fe4ca08b9c94717b1b9a';
var decrypted = decipher.update(encrypted, 'hex', 'utf-8');
decrypted += decipher.final('utf-8');

console.log(decrypted);