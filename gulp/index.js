var fs = require("fs");
var through = require("through2");
var path = require("path");
var input = path.resolve(__dirname, './data');
var ouput = path.resolve(__dirname, './data.json');
fs.createReadStream(input)
    .pipe(through.obj(function (contents, enc, done) {
        contents = contents.toString("utf-8");
        enc = "utf-8";
        done(null, contents, enc);
    }))
    .pipe(through.obj(function (contents, enc, done) {
        done(null, contents.toUpperCase(), enc);
    }))
    .pipe(through.obj(function (contents, enc, done) {
        contents = contents.split("").reverse().join("");
        done(null, contents, enc);
    }))
    .pipe(fs.createWriteStream(ouput));
