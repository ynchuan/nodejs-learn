const {
    spawn,
    exec,
    execFile,
    fork
} = require('child_process');
const path = require('path');
// var ls = spawn('ls', ['-al', '/usr'])
// ls.stdout.on('data', (data, enc, cbk) => {
//     console.log(`stdout: ${data}`);
// });
// ls.stderr.on('data', (data) => {
//     console.log(`stderr: ${data}`);
// });
// ls.on('close', (code) => {
//     console.log(`子进程退出码：${code}`);
// });

// exec('node --version', (err, stdout, stderr) => {
//     console.log(`stdout: ${stdout}`);
// });

// var file = path.resolve(__dirname, './test.js');
// execFile('node', [file], (error, stdout, stderr) => {
//     if (error) {
//         console.error(`执行出错: ${error}`);
//         return;
//     }
//     console.log(`stdout: ${stdout}`);
//     console.log(`stderr: ${stderr}`);
// });

const grep = spawn('ls', ['./'])
grep.on('close', (code, signal) => {
    console.log(`子进程收到信号${code} --${signal} 而终止`);
}).on('exit', (code, signal) => {
    console.log(`子进程收到信号${code} --${signal} 而退出`);
}).on('disconnect', () => {
    console.log(`disconnect`);
}).on('error', () => {
    console.log(`error`);
}).on('message', (msg) => {
    console.log(`message ${msgs}`);
});

setTimeout(() => {
    grep.kill('SIGHUP');
}, 1000);

// const subprocess = spawn(
//     'sh', [
//         '-c',
//         `node -e "setInterval(() => {
//       console.log(process.pid, 'is alive')
//     }, 500);"`
//     ], {
//         stdio: ['inherit', 'inherit', 'inherit']
//     }
// );

// setTimeout(() => {
//     console.log(subprocess.pid);
//     subprocess.kill(); // 不会终止 shell 中的 node 进程。
// }, 2000);
