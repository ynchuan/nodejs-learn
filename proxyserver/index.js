var http = require('http');
var httpProxy = require('http-proxy');
var proxy = httpProxy.createProxyServer();
var server = http.createServer(function (req, res) {
    var url = req.url;
    proxy.web(req, res, {
        target: url
    });
});
server.listen(9000);
