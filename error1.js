const fs = require('fs');

function nodestylecallback(err, data) {{
    if (err) {
        console.error(err);
        return;
    } 
    console.log(data);
}};

fs.readFile('some/file/that/does-not-exist', nodestylecallback);
fs.readFile('some/file/that/does-not-exist', nodestylecallback);