var fs = require('fs');
// fs.writeFileSync('message.txt', 'message');
// fs.appendFileSync('message1.txt', 'message1');
// fs.appendFileSync('message1.txt', 'message2');
// fs.writeFileSync('./tmp/msg.txt','dir test');
var read = fs.createReadStream('./message1.txt');
var write = fs.createWriteStream('./message1_copy.txt');
read.pipe(write);


var fs = require("fs");
var path = require("path");

//递归创建目录 异步方法
function mkdirs(dirname, callback) {
    fs.exists(dirname, function (exists) {
        if (exists) {
            callback();
        }
        else {
            //console.log(path.dirname(dirname));
            mkdirs(path.dirname(dirname), function () {
                fs.mkdir(dirname, callback);
            });
        }
    });
}

//递归创建目录 同步方法
function mkdirsSync(dirname) {
    //console.log(dirname);
    if (fs.existsSync(dirname)) {
        return true;
    }
    else {
        if (mkdirsSync(path.dirname(dirname))) {
            fs.mkdirSync(dirname);
            return true;
        }
    }
}

module.exports.mkdirs = mkdirs;

module.exports.mkdirsSync = mkdirsSync;

//调用
//mkdirsSync("./aa/bb/cc" , null);
//mkdirs("./aa/bb/cc", function (ee) {
//    console.log(ee)
//});


fs.writeFile('./bin/down.txt', new Buffer('jsk'));
