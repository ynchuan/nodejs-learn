const {
    Transform
} = require('stream');
let fs = require('fs');
let rs = fs.createReadStream('./users.json');
rs.setEncoding('utf8');
let toJson = Transform({
    readableObjectMode: true,
    transform(chunk, encoding, callback) {
        this.push(JSON.parse(chunk));
        callback();
    }
});
let jsonOut = Transform({
    writableObjectMode: true,
    transform(chunk, encoding, callback) {
        console.log(chunk);
        callback();
    }
});
rs.pipe(toJson).pipe(jsonOut);
