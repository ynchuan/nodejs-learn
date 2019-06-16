var arr = [9, 23, 12, 11, 43, 54, 43, 2, 12, 66];
var bubble1 = function (arr, dir) {
    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = 0; j < arr.length - i - 1; j++) {
            // 遍历从前开始,排序数据后置
            if (dir === 'asc') {
                if (arr[j] > arr[j + 1]) {
                    [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                }
            }
            else {
                if (arr[j] < arr[j + 1]) {
                    [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                }
            }
        }
    }
    return arr;
};
var bubble2 = function (arr, dir) {
    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = arr.length - 1; j > i; j--) {
            // 遍历从后开始,排序数据前置
            if (dir === 'asc') {
                if (arr[j - 1] > arr[j]) {
                    [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
                }
            }
            else {
                if (arr[j - 1] < arr[j]) {
                    [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
                }
            }
        }
    }
    return arr;
};
var rst = bubble2(arr, 'asc');
console.log(rst);
