var count = 0;
class Test {
    constructor() {
        this.idx = count;
        this.finale = () => {
            setImmediate(t => {
                console.log(this);
            });
        };
        count++;
    }
}
var t1 = new Test();
var t2 = new Test();
t1.finale(t2);
t2.finale(t1);
