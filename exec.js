const exec = require('child_process').exec;
const { stdout, stderr } = require( 'process' );
exec ('f.bat', (err, stdout, stderr) => {
    if (err) {
        console.error(err);
        return;
    };
    console.log(stdout);
});