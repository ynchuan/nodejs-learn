const fs = require('fs');
const path = require('path')
const filePath = path.resolve(__dirname, './data.txt');
// const ws = fs.createWriteStream(filePath);
// let rst;
// let count = 0;
// ws.on('drain', () => {
//     console.log('drain');
// });
// while (rst = ws.write(new Date().toString() + '\n')) {
//     console.log(rst);
//     console.log(count);
//     count++;
// }

const filePath1 = path.resolve(__dirname, './data1.txt');
const fileRS = fs.createReadStream(filePath);
const file1RS = fs.createWriteStream(filePath1);
fileRS.pipe(file1RS);
