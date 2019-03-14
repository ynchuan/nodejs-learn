var http = require('http');
var server = http.createServer(function (req, res) {
    console.log('2-inner request');
    console.log(req.headers);
    res.on('drain', function () {
        console.log('drain');
    });
    // res.writeHead(200, 'JASK');
    // res.write(Buffer.from('NNN'));
    // res.write(Buffer.from('NNN1'));
    // res.write(Buffer.from('NNN21'));
    // res.write(Buffer.from('NNN321'));
    // res.end('TTTS');
    res.writeContinue();
    res.end();
    console.log('res end');
    console.log(res._header);
}).on('connection', function (socket) {
    // 建立新的 TCP 流时会触发此事件
    console.log('1-connection');
    socket.on('data', function (chunk) {
        console.log('server connection data' + chunk.toString());
    });
}).on('request', function (req, res) {
    // 每次有请求时都会触发
    console.log('3-request');
}).on('checkContinue', function (req, res) {
    // HTTP Expect 100-continue
    console.log('checkContinue');
}).on('checkExpectation', function (req, res) {
    // HTTP Expect 非100-continue
    console.log('checkExpectation');
}).on('clientError', function (e, socket) {
    console.log('clientError');
    // 必须将发送的任何 HTTP 响应（包括响应头和有效负载）直接写入 socket 对象
    socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
}).on('close', function (req, res) {
    // 当服务器关闭时触发
    console.log('close');
}).on('connect', function (req, socket, head) {
    // 每次客户端请求 HTTP CONNECT 方法时触发
    console.log('connect');
    console.log(head.toString());
    console.log(req.url.toString());
    // var raw;
    // socket.on('data', function (chuck) {
    //     raw += chuck;
    //     console.log(chuck);
    // }).on('end', function () {
    //     console.log(raw);
    //     console.log('server connect end');
    // });
    // socket.write('HTTP/1.1 200 CONNECT SUCC \r\n');
    // socket.write('KOKKO');
    // socket.end('HAHA');
}).on('upgrade', function (req, socket, head) {
    // 每次客户端请求 HTTP 升级时发出，需要手动监听data
    console.log('upgrade');
    socket.write('HTTP/1.1 101 Web Socket Protocol Handshake\r\n' +
        'Upgrade: WebSocket\r\n' +
        'Connection: Upgrade\r\n' +
        '\r\n');
    socket.pipe(socket);
    socket.on('data', function (chunk) {
        console.log('server upgrade data:' + chunk.toString());
    });
});
server.listen(9999, function () {
    console.log('listen:9999');
});;
