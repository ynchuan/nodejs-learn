//SSE 全称就是 Server-Sent Events. 中译 为 服务器推送.
var http=require("http");
var fs=require("fs");
var url=require("url");
var io=require("socket.io");
var server=http.createServer(function(req,res){
    var path=url.parse(req.url).pathname;
    if(path=="/getDate"){
        res.writeHead(200,{
            "Content-Type": "text/event-stream",
            "Access-Control-Allow-Origin":"*"
        });
        var num =0,timeout;
        var f = function(){
            if(num===10){
                res.end();
                console.log("end");
            }else{
                res.write("event: myevent");
                res.write("id: " + num + "\n");
                res.write("data: " + num + "\n\n");
                num++;
                res.end();
                //timeout=setTimeout(f,1000);
            }
        }
        f();
        return;
    }
    try{
        fs.createReadStream(__dirname+path).pipe(res);
    }catch(err){

    }
}).listen(8080);