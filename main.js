var http = require('http');
var fs = require('fs');
var app = http.createServer(function(request,response){
    var url = request.url;
    if(url == "/"){
      url = '/index.html';
    }
    response.writeHead(200);
    response.end(fs.readFileSync(__dirname + url));

});
console.log("It's run in 3000 port Go to 'localhost:3000'")
app.listen(3000);