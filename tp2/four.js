var fs = require('fs');

fs.readFile(process.argv[2], 'utf8', function(err, data) {
    if (err) throw err;
    data = data.toString().split('\n').length - 1;
    console.log(data)
});