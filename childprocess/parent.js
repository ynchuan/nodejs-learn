const {
    fork
} = require('child_process');
const path = require('path');
var file = path.resolve(__dirname, './child.js');
let child = fork(file);

child.on('message', (msg) => {
    console.log(`[parent] get a data from child is ${msg}\n`);
}).on('close', (code, signal) => {
    console.log(`子进程收到信号 ${signal} 而终止`);
}).on('disconnect', function (e) {
    console.log(`[parent] child disconnect ${e}\n`);
}).on('error', function (e) {
    console.log(`[parent] child error ${e}\n`);
}).on('exit', function (e) {
    console.log(`[parent] child exit ${e}\n`);
});

child.send('\nhello child\n');
console.log(`[parent] child channelId: ${child.channel}\n`);

setTimeout(() => {
    child.disconnect();
    child.send('hh');
}, 3000);
