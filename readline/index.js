var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('you name?\n', ans => {
    console.log(ans);
    // rl.write('hello write');
    rl.pause();
});
rl.on('close', () => {
    console.log('close');
}).on('line', input => {
    console.log('line-' + input);
}).on('resume', () => {
    console.log('resume');
}).on('pause', () => {
    console.log('pause');
}).on('SIGCONT', () => {
    console.log('SIGCONT');
    // readline.clearLine(process.stdout, 0);
    rl.prompt();
}).on('SIGINT1', () => {
    // <ctrl>-C    如果当 input 流接收到 SIGINT 时没有注册 'SIGINT' 事件监听器，则会触发 'pause' 事件。
    console.log('SIGINT');
    rl.prompt();
}).on('SIGTSTP1', () => {
    // <ctrl>-Z  如果当 input 流接收到 SIGTSTP 时没有注册 'SIGTSTP' 事件监听器，则 Node.js 进程将被发送到后台。
    console.log('SIGTSTP');
});
