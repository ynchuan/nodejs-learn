var http = require('http');
var server = http.createServer();
var log = function (str) {
    console.log('##' + Date.now() + '##');
    console.log(str);
}
server.on('request', function (req, res) {
    // req读入流 res写出流
    log(req.url);
    req.on('data', function (chunk) {
        log('server-request-data-' + chunk.toString());
    }).on('end', function () {
        log('server-request-end');
        res.writeContinue();
        res.end();
    });
}).on('connection', function (socket) {
    // socket 双工流
    socket.on('data', function (chunk) {
        log('server-connection-data-' + chunk.toString());
    });
    socket.on('end', function () {
        log('server-connection-end');
    });
    // socket.write('server socket');
    // socket.end('server socket end');
}).listen(9999, function () {
    var opt = {
        protocol: 'http:',
        hostname: '127.0.0.1',
        port: 9999,
        method: 'POST',
        path: '/hah'
    };
    var client = http.request(opt);
    client.on('response', function (res) {
        // res 可读流
        res.on('data', function (chunk) {
            log('client-response-data-' + chunk.toString());
        });
        res.on('end', function () {
            log('client-response-end');
            server.close();
        });
    }).on('socket', function (socket) {
        // socket duplux流,可读可写
        socket.on('data', function (chunk) {
            log('client-socket-data-' + chunk.toString());
        });
        socket.on('end', function () {
            log('client-socket-end');
        });
        // socket.write('client socket');
        // socket.end('client socket end');
    });
    client.write('client write');
    client.end('client write end');
});
