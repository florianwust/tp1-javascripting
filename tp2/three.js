var fs = require('fs');
var str = fs.readFileSync(process.argv[2]);
str = str.toString();
var result = str.split('\n');
result = result.length - 1;
console.log(result);