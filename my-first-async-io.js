var fs = require('fs')

var lines = 0 ; 
 var file = process.argv[2] ; 

 fs.readFile(file, function (err, content) {
     lines = content.toString().split('\n').length -1  ;
     console.log(lines);

})

