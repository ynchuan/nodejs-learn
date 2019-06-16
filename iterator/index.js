class MJob {
    constructor(name) {
        this.name = name;
        this.sa = Date.now();
        this.nextMJob = null;
    }
    setNextMJob(nextMJob) {
        this.nextMJob = nextMJob;
    }
    next() {
            let value;
            let done = false;
            if (!MJob.start) {
                MJob.start = this;
            }
            if (this.nextMJob !== MJob.start) {
                value = this.nextMJob;
                done = false;
            }
            else {
                done = true;
            }
            return {
                value,
                done
            };
        }
        [Symbol.iterator]() {
            return this.next();
        }
}


let mj1 = new MJob(1);
let mj2 = new MJob(2);
let mj3 = new MJob(3);
mj1.setNextMJob(mj2);
mj2.setNextMJob(mj3);
mj3.setNextMJob(mj1);

// let mj = mj1;
// do {
//     console.log(mj.name);
//     console.log(mj.sa);
//     console.log('---');
// } while (mj = mj.next())


console.log(mj1.next());
console.log(mj2.next());
console.log(mj3.next());
