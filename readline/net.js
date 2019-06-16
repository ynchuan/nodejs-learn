const net = require('net');
const serv = net.createServer((socket) => {
    let date = new Date().toString();
    socket.on('data', (chunk) => {
        console.log(chunk.toString());
        socket.write(new Date().toString());

    }).on('end', () => {
        console.log('end');
        socket.write(new Date.toString());
    });
    socket.write(date);
});
serv.listen(8000, '127.0.0.1', () => {
    console.log(serv.address());
});
