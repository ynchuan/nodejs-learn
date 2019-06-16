const {
    Readable
} = require('stream');
const {
    debuglog
} = require('util');

class MyReadable extends Readable {
    constructor() {
        super();
        this.count = 0;
    }
    _read() {
        var source = () => {
            setTimeout(() => {
                if (this.count < 5) {
                    this.push(`ynchuan TEST ${this.count}`);
                    this.count++;
                    source();
                }
            }, 500);
        };
        source();
    }
}
let log = debuglog('foo');

log('hello from foo [%d]', 123);
var mr = new MyReadable();
mr.setEncoding('utf8');
mr.on('data', function (data) {
    log(data);
});
