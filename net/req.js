var http = require('http');
var url = 'http://v.baidu.com/tv_intro/?frp=fufei&e=1&service=json&dtype=tvPlayUrl&id=28607';
var opt = {
    protocol: 'http:',
    hostname: '127.0.0.1',
    port: 9999,
    path: '/tv_intro/?frp=fufei&e=1&service=json&dtype=tvPlayUrl&id=28607',
    // method: 'GET',
    method: 'CONNECT',
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
    // var raw;
    // socket.on('data', function (chuck) {
    //     raw += chuck;
    //     console.log(chuck);
    // }).on('end', function () {
    //     console.log(raw);
    //     console.log('client connect end');
    // });
}).on('continue', function (res, socket, head) {
    console.log('client continue');
}).on('upgrade', function (e) {
    console.log('client upgrade' + e.message);
}).on('information', function (e) {
    console.log('client information' + e.message);
}).on('timeout', function (e) {
    console.log('client timeout' + e.message);
}).on('response', function (res) {
    console.log('3-client response' + res.statusCode);
}).on('socket', function (e) {
    console.log('1-0-client socket');
}).on('socket', function (e) {
    console.log('1-1-client socket');
});
client.write('HAHSKA');
client.end('JKDS');
