var fs = require('fs');
var path = require('path');
var filePath = path.resolve(__dirname, 'test1/test2/test2.txt');
fs.open(filePath, 'r', (err, fd) => {
    // console.log(fd);
    fs.fstat(fd, (err, stat) => {
        // console.log(stat);
        fs.close(fd, (err) => {
            if (err) throw err;
        });
    });
});
var test3 = path.resolve(__dirname, 'test3/wxx.txt');
fs.open(test3, 'r', function (err, fd) {
    if (err) {
        throw err;
    }
    let buffer = new Buffer(16);
    // open可以打开目录；read不能读取目录，只能读取文件，将数据读入buffer
    fs.read(fd, buffer, 2, 2, 2, function (err, bytesRead, buf) {
        // console.log(err);
        // console.log(bytesRead);
        // console.log(buf);
        // console.log(buf.toString());
        // console.log(buf === buffer);
        fs.close(fd);
    });
    // readdir 文件异常，目录有效
    fs.readdir(test3, function (err, dirs) {
        // console.log(err);
        // console.log('read dir');
        // console.log(dirs);
    });
    // readdir 目录异常，文件有效
    fs.readFile(test3, {
        encoding: 'utf8'
    }, function (err, data) {
        // console.log(err);
        // console.log('read file');
        // console.log(data);
    });
});

var dirPath = path.resolve(__dirname, 'test1');
var dirent = fs.readdir(dirPath, {
    withFileTypes: false
}, function (err, dirent) {
    // console.log(dirent);
});


var test1 = path.resolve(__dirname, 'test1/test1.txt');
fs.readFile(test1, 'utf8', function (err, text) {
    // console.log(text);
    fs.truncate(test1, 20, function (err) {
        // console.log(fs.readFileSync(test1, 'utf8'));
    })
});

fs.stat(test1, function (err, stat) {
    // console.log(stat);
    fs.chmod(test1, 0o666, function (err) {
        // console.log(err);
    });
});

var tmp = path.resolve(__dirname, 'test1/test1')
    // fs.link(test1, tmp, function (err) {
    //     // 创建硬链接
    //     // console.log(err);
    // });
fs.readlink(tmp, function (err, link) {
    console.log(err);
    console.log(link);
    fs.readFile(tmp, 'utf8', function (err, data) {
        console.log(data);
    });
});

var tmp1 = path.resolve(__dirname, 'test3');

fs.mkdir(tmp1, {
    recursive: true
}, function (err) {
    // console.log(err);
});
