const fs = require('fs');
// Asynchronously reads a file and logs its content to the console
function readAccountFile(filepath) {
    fs.readFile(filepath, 'utf8', (err, data) => {
        if (err) throw err; 
        console.log(data); 
    });
}

readAccountFile('./example.txt');