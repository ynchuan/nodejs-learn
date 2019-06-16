var arr = [9, 23, 12, 11, 43, 54, 43, 2, 12, 66];
var bubble1 = function (arr) {
    for (var i = 0, n = arr.length; i < n - 1; i++) {
        for (var j = 0; j < n - i; j++) {
            if (arr[j] > arr[j + 1]) {
                var tmp;
                tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
            }
        }
    }
    return arr;
};
var rst = bubble1(arr);
console.log(rst);
