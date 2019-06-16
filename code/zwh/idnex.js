let test = [3, 4, 1, 6, 9, 5];
let sortA = function (test) {
    let len = test.length,
        a;
    for (let i = 0; i < len - 1; i++) {
        for (let j = 0; j < len - i - 1; j++) {
            if (test[j] > test[j + 1]) {
                a = test[j + 1];
                test[j + 1] = test[j];
                test[j] = a;
            }
        }
    }
    return test;
};
console.log(test);
console.log(sortA(test));
