var express = require("express");
var url = require("url");
var app = express();
app.use(express.static("F:/wangxunxun/front_end/workspace/sd"));//托管静态文件
app.get("/", function (req, res) {
    //req (请求) 和 res (响应) 与 Node 提供的对象完全一致
    res.send("hello express and node");
    console.info(url.parse(req.url));
});

app.post('/', function (req, res) {
    res.send('Got a POST request');
});

// /user 节点接受 PUT 请求
app.put('/user', function (req, res) {
    res.send('Got a PUT request at /user');
});

// /user 节点接受 DELETE 请求
app.delete('/user', function (req, res) {
    res.send('Got a DELETE request at /user');
});
var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("app info--" + host + ":" + port);
});
