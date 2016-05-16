var fs = require("fs");
var through = require("through2");

fs.createReadStream("./in.txt")
    .pipe(through.obj(function (contents, enc, done) {
        if (enc === "buffer") {
            contents = contents.toString("utf-8");
            enc = "utf-8";
        }
        done(null, contents, enc);
    }))
    .pipe(through.obj(function (contents, enc, done) {
        done(null, contents.toUpperCase(), enc);
    }))
    .pipe(through.obj(function (contents, enc, done) {
        contents = contents.split("").reverse().join("");
        done(null, contents, enc);
    }))
    .pipe(fs.createWriteStream("./out.txt"));