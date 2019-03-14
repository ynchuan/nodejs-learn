const {
    Transform
} = require('stream');

// 转换流也是双工流，转换流是一种自循环的双工流

const myTransform = new Transform({
    writableObjectMode: true,

    transform(chunk, encoding, callback) {
        // 强制把 chunk 转换成数值。
        chunk |= 0;

        // 将 chunk 转换成十六进制。
        const data = chunk.toString(16);

        // 推送数据到可读队列。
        callback(null, '0'.repeat(data.length % 2) + data);
    }
});

myTransform.setEncoding('ascii');
myTransform.on('data', (chunk) => console.log(chunk));

myTransform.write(1);
// 打印: 01
myTransform.write(10);
// 打印: 0a
myTransform.write(100);
// 打印: 64
