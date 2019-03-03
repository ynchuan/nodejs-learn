const http = require('http');
const net = require('net');
const url = require('url');
const log = require('./util').log;

// 创建 HTTP 隧道代理。
const proxy = http.createServer((req, res) => {
    log('server request');
    req.on('readable', function () {
        // client-post请求中，req.write会触发该方法
        log('server readable');
    });
    req.on('close', function () {
        // client-post请求中，req.write会触发该方法
        log('server close');
    });
    req.on('data', function (chunk) {
        // client-post请求中，req.write会触发该方法
        log('server chunk');
        log(chunk.toString());
    });
    req.on('end', function () {
        // client-get|post请求中，req.end会触发该方法
        log('server end');
    });
    setTimeout(function () {
        log('server write start');

        res.on('finish', function () {
            log('server write finish');

        });
        res.on('close', function () {
            log('server write close');

        });
        res.on('drain', function () {
            log('server write drain');

        });
        res.on('pipe', function () {
            log('server write pipe');

        });
        res.writeHead(200, {
            'Content-Type': 'text/plain'
        });
        res.end(new Array(90).fill('j').toString());
        log('server write end');

    }, 100);
});
proxy.on('connect', (req, socket, head) => {
    // 连接到原始服务器。
    log('server connect');
    log(req.headers);
    log(head.toString()); // 对应client req.write()&&end()
    const srvUrl = url.parse(`http://${req.url}`);
    socket.write('HTTP/1.1 200 Connection Established\r\n' +
        'Proxy-agent: Node.js-Proxy\r\n' +
        '\r\n'); // 与客户端沟通确认隧道，双向通道打通
    socket.on('data', function (chunk) {
        log('serv socket data:' + chunk.toString());
    });
    socket.on('end', function () {
        log('serv socket end');
    });

    setTimeout(function () {
        for (var j = 200; j < 210; j++) {
            socket.write(String(j));
            log(j);
        }
    }, 5000);

});
proxy.listen(1337, function () {
    log('listening...');
});
