const fs = require('fs');
const child_process = require('child_process');
const { stdout, stderr } = require( 'process' );
for (var i = 0; i < 3; i++) {
    var worker_process = child_process.exec('node.js support'+i, (err, stdout, stderr) => {
        if (err) {
            console.error(err.code);
            console.error('Signal Received'+ err.signal);
            console.error('Stack Error'+ err.stack);
        }
        console.log('stdout'+ stdout);
        console.log('sterr'+ stderr);
    });
    worker_process.on('exit', (code) => {
        console.log('worker_process exited with code'+ code);
    });
};