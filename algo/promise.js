class MPromise {
    constructor(fn) {
        this.status = 'pending';
        this.defered = []; // 每个promise可以有多个级联promise，一个级联promise可以前置多个回调
        let handler = (data) => {
            this.data = data;
            setImmediate(() => {
                this.handler();
            });
        };
        let resolve = data => {
            this.status = 'fulfilled';
            handler(data);
        };
        let reject = data => {
            this.status = 'rejected';
            handler(data);
        }
        fn(resolve, reject);
    }
    handler() {
        let data = this.data;
        let status = this.status;
        let defered = this.defered;
        defered.forEach(item => {
            let next = item.nResolve;
            let nReject = item.nReject;
            let fn = item.fulfilled;
            let finalFns = this.finalFns;
            if (status === 'rejected') {
                next = nReject;
                fn = item.rejected;
            }
            try {
                let rst = void 0;
                if (fn) {
                    if (this.isFinally) {
                        fn();
                        rst = data;
                    }
                    else {
                        rst = fn(data);
                    }
                }
                if (rst instanceof MPromise) {
                    rst.then(next);
                }
                else {
                    next(rst);
                }
            }
            catch (e) {
                console.error(e);
                nReject(e);
            }
        });
    }
    then(doFulfilled, doRejected) {
        let defered = {
            fulfilled: doFulfilled,
            rejected: doRejected,
        };
        this.defered.push(defered);
        return new MPromise((res, rej) => {
            //  推入下一个promise驱动
            defered.nResolve = res;
            defered.nReject = rej;
        });
    }
    catch (fn) {
        return this.then(void 0, fn);
    }
    finally(fn) {
        this.isFinally = 1;
        return this.then(fn, fn);
    }
    static resolve(data) {
        return new MPromise((resolve, reject) => {
            resolve(data);
        });
    }
    static reject(data) {
        return new MPromise((resolve, reject) => {
            reject(data);
        });
    }
}
const Promise = MPromise;
let mpms = new Promise((res, rej) => {
    setTimeout(() => {
        res(new Date);
    })
});
mpms.finally(data => {
    console.log('phase 1 finnaly');
    console.log(data);
    return data;
}).then(data => {
    console.log('1');
    console.log(data);
}).catch(data => {
    console.log('1-1');
    console.log(data);
});
mpms.finally(data => {
    console.log('phase 2 finnaly');
    console.log(data);
    return data;
}).then(data => {
    console.log('2');
    console.log(data);
    return '2-1';
}).finally(data => {
    console.log('phase 2 finnaly');
    console.log(data);
    return data;
});
// let mpms1 = new Promise((res, rej) => {
//     setTimeout(() => {
//         res(new Date);
//     })
// }).finally(data => {
//     console.log('finnally 1');
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             res('finnally 1');
//         })
//     })
// }).finally(data => {
//     console.log('finnally 2');
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             res('finnally 2');
//         })
//     })
// }).then(data => console.log(data));



// mpms.catch(err => {
//     console.log('phase error 1');
//     console.error(err);
//     return err;
// });
// mpms.then(data => {
//     console.log('phase 2');
//     console.log(data);
// }).then(data => {
//     return new Promise((res, rej) => {
//         res(Date.now());
//     });
// }).then(data => {
//     console.log('phase 3');
//     console.log(data);
//     return data;
// }).catch(err => {
//     console.log('phase error 3');
//     console.error(err);
// });
