function bubbleSort(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = i; j < arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
}
var arr = [3, 9, 4, 5, 1, 4];
console.log(arr);
bubbleSort(arr);
console.log(arr);
