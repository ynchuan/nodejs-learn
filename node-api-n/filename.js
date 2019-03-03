console.log(__dirname); // 当前文件目录
console.log(__filename); // 当前文件位置
console.log(process.cwd());//执行目录

console.log(process.env.PORT);


var path = require('path');
console.log(path.dirname(__dirname));// ../*