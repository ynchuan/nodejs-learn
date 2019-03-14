const Writable = require('stream').Writable;

class OutputStream extends Writable {
    constructor() {
        super();
        this.highWaterMark = 1;
        this.count = 0;
    }
    _write(chunk, encoding, cbk) {
        console.log('exec write');
        let rst = process.stdout.write(chunk);
        console.log(rst);
        setTimeout(() => {
            if (this.count === 0) {
                cbk();
            }
            this.count++;
        }, 1000)
    }
}

let os = new OutputStream();
os.write('TEK');
os.write('DSF');
os.write('D(SF');
os.end();
