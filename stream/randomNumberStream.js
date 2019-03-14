const ReadableStream = require('stream').Readable;
class RandomNumberStream extends ReadableStream {
    constructor(max) {
        super();
        this.max = max;
    }
    _read() {
        setTimeout(() => {
            let randomNum = parseInt(Math.random() * 10000);
            if (this.max) {
                this.push(`${randomNum}\n`);
                this.max--;
            }
            else {
                this.push(null);
            }
        }, 100);
    }
}

const rns = new RandomNumberStream(5);
let count = 0;
rns.setEncoding('utf8');
// 暂停模式数据读取方式
// rns.on('readable', () => {
//     let chunk;
//     while ((chunk = rns.read()) !== null) {
//         console.log('-s-');
//         console.log(chunk);
//         console.log('-e-');

//     }
// });

// 流动模式数据读取方式一

// rns.pipe(process.stdout);

// 流动模式数据读取方式二
rns.on('data', (chunk) => {
    console.log(chunk);
    count++;
    if (count === 2) {
        rns.pause();
        setTimeout(() => {
            rns.resume();
        }, 5000)
    }
}).on('end', () => {
    console.log('done');
});
