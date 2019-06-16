var arr = [9, 23, 12, 11, 43, 54, 43, 2, 12, 66];
var quick = function (arr, dir) {
    var lf = [];
    var rg = [];
    var ref = arr[0];
    var ret = [];
    if (arr.length > 0) {
        arr.forEach(function (i) {
            if (dir === 'asc') {
                if (i < ref) {
                    lf.push(i);
                }
                else if (i > ref) {
                    rg.push(i);
                }
            }
            else {
                if (i > ref) {
                    lf.push(i);
                }
                else if (i < ref) {
                    rg.push(i);
                }
            }
        });
        lf = quick(lf, dir);
        rg = quick(rg, dir);
        ret = lf.concat(ref, rg);
    }
    return ret;
};
var rst = quick(arr, 'desc');
console.log(rst);
