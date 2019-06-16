class Pipe {
    constructor(input, output) {
        this.input = input;
        this.output = output;
    }
    start() {
        this.read();
    }
    log(info) {
        console.log(`${Date.now()}:${info}`);
    }
    read() {
        this.input.on('data', (chunk, enc, cbk) => {
            this.log('reading data...');
            this.write(chunk);
        }).on('end', () => {
            this.log('read end');
            this.output.end('write ended!');
        });
    }
    write(chunk) {
        let rst = this.output.write(chunk);
        this.log(`write data, rst:${rst}`);
        if (!rst) {
            this.input.pause();
            this.output.once('drain', () => {
                this.input.resume();
                this.log(`write data drain`);
            })
        }
        this.log(`write data fail,chunk:${chunk.toString().length}`);

    }
}

const fs = require('fs');
const path = require('path');
const input = fs.createReadStream(path.resolve(__dirname, './data/amuse.json'));
const output = fs.createWriteStream(path.resolve(__dirname, './data/amuse2.json'));
const pipe = new Pipe(input, output);
pipe.start();
