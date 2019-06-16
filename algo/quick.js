var arr = [9, 23, 12, 11, 43, 54, 43, 2, 12, 66];
var quickSort = function (arr, dir) {
    var lf = [];
    var rg = [];
    var base = arr[0];
    var ret = [];
    if (arr.length > 1) {
        arr.forEach(function (item) {
            if (item < base) {
                lf.push(item);
            }
            else if (item > base) {
                rg.push(item);
            }
        });
        lf = quickSort(lf, dir);
        rg = quickSort(rg, dir);
        ret = lf.concat(base, rg);
    }
    else {
        ret = arr;
    }
    return ret;
};
var rst = quickSort(arr, 'asc');
console.log(rst);
