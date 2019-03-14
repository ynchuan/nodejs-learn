var fs = require('fs');
var path = require('path');
var filePath = path.resolve(__dirname, 'test1/test2/test2.txt');
fs.open(filePath, 'r', (err, fd) => {
    fs.fstat(fd, (err, stat) => {
        // console.log(stat);
        fs.close(fd, (err) => {
            if (err) throw err;
        });
    });
});
var dirPath = path.resolve(__dirname, 'test1');
var dirent = fs.readdir(dirPath, {
    withFileTypes: false
}, function (err, dirent) {
    console.log(dirent);
});
