let test = [3, 4, 1, 6, 9, 5];
let sortA = function (test) {
    for (var i = 0; i < test.length - 1; i++) {
        for (var j = 0; j < test.length - i - 1; j++) {
            if (test[j] < test[j + 1]) {
                var temp;
                temp = test[j];
                test[j] = test[j + 1];
                test[j + 1] = temp;
                console.log('一次交换后')
                console.log(test[j]);
                console.log(test[j + 1]);
            }
        }
    }
    return test
};

console.log(test);
console.log(sortA(test));
