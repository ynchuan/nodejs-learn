var http=require("http");
var fs=require("fs");
var url=require("url");
var io=require("socket.io");
var server=http.createServer(function(req,res){
    var path=url.parse(req.url).pathname;
    if(path=="/getDate"){
        res.writeHead(200,{
            "Access-Control-Allow-Origin":"*"
        });
        res.write("welcome index");
        res.end();
        return;
    }
    try{
        fs.createReadStream(__dirname+path).pipe(res);
    }catch(err){
        console.error(err)
    }
}).listen(8081);