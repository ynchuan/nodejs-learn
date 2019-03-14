/**
 * 写出流拥有写出功能，可以执行write，例如客户端client实例,服务端response
 * 读入流拥有读权限，可以执行数据接收功能，例如客户端response,服务端request
 * client通过socket事件可以获取数据通信客户端socket = server端通过connection事件可以获取数据通信服务端socket，
 * 两个socket是duplux流，可写可读
 */
var http = require('http');
var url = 'http://v.baidu.com/tv_intro/?frp=fufei&e=1&service=json&dtype=tvPlayUrl&id=28607';
var opt = {
    protocol: 'http:',
    hostname: '127.0.0.1',
    port: 9999,
    path: '/tv_intro/?frp=fufei&e=1&service=json&dtype=tvPlayUrl&id=28607',
    method: 'GET',
};
var opt1 = {
    protocol: 'http:',
    hostname: '127.0.0.1',
    port: 9999,
    path: 'tv_intro/?frp=fufei&e=1&service=json&dtype=tvPlayUrl&id=28607',
    method: 'CONNECT',
};
var opt2 = {
    protocol: 'http:',
    hostname: '127.0.0.1',
    port: 9999,
    headers: {
        'Connection': 'Upgrade',
        'Upgrade': 'websocket'
    }
};
var client = http.request(opt, function (res) {
    console.log('2-inner response');
    console.log(res.statusCode);
    console.log(res.statusMessage);
    console.log(res.headers);
    var rawData = '';
    var count = 4;
    res.on('data', function (chunk) {
        rawData += chunk;
        console.log(count + '-chunk:' + chunk);
        console.log(count + '-data:' + chunk.length);
        count++;
    });
    res.on('end', function () {
        console.log(count + '-end');
        console.log(rawData + '-rawData');
    });
}).on('abort', function (e) {
    console.log('client abort' + e.message);
}).on('connect', function (req, socket, head) {
    console.log('client connect');
    console.log(head.toString());
}).on('continue', function (res, socket, head) {
    console.log('client continue');
}).on('upgrade', function (res, socket, upgradeHead) {
    console.log('client upgrade');
    socket.write('FSK');
    socket.end('TS');
}).on('information', function (e) {
    console.log('client information' + e.message);
}).on('timeout', function (e) {
    console.log('client timeout' + e.message);
}).on('response', function (res) {
    console.log('3-client response' + res.statusCode);
}).on('socket', function (e) {
    console.log('1-0-client socket');
}).on('socket', function (socket) {
    console.log('1-1-client socket');
    socket.on('data', function (chunk) {
        console.log('client socket data' + chunk.toString());
    });
});
client.write('HAHSKA');
client.end('JKDS');
