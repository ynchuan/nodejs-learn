var arr = [9, 23, 12, 11, 43, 54, 43, 2, 12, 66];
var sort = function (arr) {

    const qs = (start, end) => {
        if (start >= end) return;

        let base = arr[start],
            idx = start;
        for (let i = start + 1; i <= end; i++) {
            if (arr[i] < base) {
                arr.splice(start, 0, arr.splice(i, 1));
                idx++;
            }
        }
        qs(start, idx);
        qs(idx + 1, end);
    };

    qs(0, arr.length - 1);
    return arr;

};
console.log(sort(arr));
