var arr = [9, 23, 12, 11, 43, 54, 43, 2, 12, 66];
var count = 0;
var qs = function (arr, dir) {
    var lf = [];
    var rg = [];
    var pivot = arr[0];
    var ret = [];
    if (arr.length > 0) {
        arr.forEach(function (item) {
            count++;
            if (pivot < item) {
                rg.push(item);
            }
            else if (pivot > item) {
                lf.push(item);
            }
        });
        lf = qs(lf);
        rg = qs(rg);
        ret = lf.concat(pivot, rg);
    }
    return ret;
};
var rst = qs(arr, 1);
console.log(rst);
console.log(count);
