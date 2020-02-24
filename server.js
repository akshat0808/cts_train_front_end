console.log("hello");
const http = require('http');

http.createServer(function(req, res){
    res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

    res.end("hello how are you")

})
.listen(3000);
console.log("3000 par chalega")