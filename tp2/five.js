var fs = require('fs');
var path = process.argv[2].toString();
var type = process.argv[3].toString();
fs.readdir(path, function(err, list) {
	if (err) throw err;
	for (var i = 0; i < list.length; i++){
		if(list[i].match(new RegExp('\\.'+type+'$'))){
			console.log(list[i]);
		}
	}
});