var http = require("http");
var os = require("os");


var server = http.createServer(function(request, response) {
  response.writeHeader(200, {"Content-Type": "text/plain"});  
        //response.write(JSON.stringify(output));
       var output = {
          "ip-address": JSON.stringify(request.headers["x-forwarded-for"]).slice(1,15),
           "language": JSON.stringify(request.headers["accept-language"]).slice(1,9),
           "operating system": JSON.stringify(request.headers["user-agent"]),
           "architecture": os.arch()
        }
       response.write(decodeURIComponent(JSON.stringify(output)));
        response.end();
});

server.listen(process.env.PORT || 8080);
