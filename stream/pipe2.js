const Readable = require('stream').Readable;
const Duplex = require('stream').Duplex;

Readable.prototype._pipe_ = function (output) {
    this.on('data', chunk => {
        let rst = output.write(chunk);
        if (!rst) {
            this.pause();
            output.once('drain', () => {
                this.resume();
            });
        }
        console.log(chunk.length);
    }).on('end', () => {
        output.end();
    });
    return output;
}
class MDuplux extends Duplex {
    constructor(opt) {
        super(opt)
    }
    _read() {

    }
    _write(chunk, enc, cbk) {
        this.push(chunk);
        cbk(); //会完成底层写出，并触发上层写的drain
    }
}
const fs = require('fs');
const input = fs.createReadStream('./data/amuse.json');
const output = fs.createWriteStream('./data/amuse4.json');
const mDuplux = new MDuplux({
    readableHighWaterMark: 32,
    writableHighWaterMark: 32
});
input._pipe_(mDuplux)._pipe_(output);
