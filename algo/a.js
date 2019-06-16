var A = (() => {
    let sum = 0;
    return a => {
        if (a) {
            sum += a;
            return a => {
                return A(a);
            };
        }
        else {
            let ret = sum;
            sum = 0;
            return ret;
        }
    };
})();

var A1 = (a, sum) => {
    if (a) {
        sum += a;
        return a => {
            return A(a, sum);
        };
    }
    else {
        return sum;
    }
};
console.log(A(1)());

console.log(A(2)(3)());

console.log(A(1)(2)(3)());

const B = (b, sum = 0) => {
    sum += b;
    let ret = b => {
        return B(b, sum);
    };
    ret.valueOf = ret.toString = () => {
        return sum;
    };
    return ret;
};
console.log(B(1)(2)(2)); // 5
console.log(B(1)(2)(3)); // 5
