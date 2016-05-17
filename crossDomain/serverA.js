var http=require("http");
var fs=require("fs");
var url=require("url");
var io=require("socket.io");
var server=http.createServer(function(req,res){
    var path=url.parse(req.url).pathname;
    try{
        fs.createReadStream(__dirname+path).pipe(res);
    }catch(err){
        console.error(err);
    }
}).listen(8080);