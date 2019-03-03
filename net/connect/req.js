const http = require('http');
const log = require('./util').log;
const opt = {
    port: 1337,
    host: '127.0.0.1',
    method: 'CONNECT',
    path: 'nodejs.cn:80'
};
const req = http.request(opt, function (res) {
    log('client response');
    res.on('data', function (chunk) {
        log('chunk');
        log(chunk.toString());
    });
});
req.write('G');
req.end('X');

req.on('connect', (res, socket, head) => {
    log('client req connect');
    log(res.headers);
    // 通过 HTTP 隧道发出请求。
    var i = 0;
    for (var j = 100; j < 110; j++) {
        socket.write(String(j));
        log(j);
    }
    socket.on('data', (chunk) => {
        log('client req connect data:' + chunk.toString());
    }).on('end', () => {
        log('clint req connect end.');
    }).on('error', () => {
        log('clint req connect error.');
    });
});
