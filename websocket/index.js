var http=require("http");
var fs=require("fs");
var url=require("url");
var io=require("socket.io");
var server=http.createServer(function(req,res){
    var path=url.parse(req.url).pathname;

    try{
        fs.createReadStream(__dirname+path).pipe(res);
    }catch(err){
        console.error(err)
    }
}).listen(8080);
var socket=io.listen(server);
socket.on("connection",function(client){
    console.log("websocket conn");
    client.on("message",function(event){
        console.log("recieve  msg:"+event);
    });
    client.on('disconnect',function(){
        clearInterval(interval);
        console.log('Server has disconnected');
    });
    client.on('hh',function(a){
        console.log('hh:'+a);
    });
    var interval= setInterval(function() {
        client.send('This is a message from the server! ' + new Date().getTime());
    },5000);
});

