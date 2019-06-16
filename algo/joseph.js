var LinkList = require('./linkedList');
var josephCircle = function (k, m, N) {
    var idx;
    var data = []
    for (var i = 0; i < m; i++) {
        data.push(i);
    }
    console.log(data);
    while (m > 1) {
        idx = k + N - 1;
        if (idx > m) {
            idx = idx % m;
        }
        k = idx;
        if (k === m) {
            k = 1;
        }
        --m;
        var tmp = data.splice(idx - 1, 1);
        console.log(tmp);
    }
    console.log(data);
};
josephCircle(1, 10, 3);



var fun = function (m, N, i) {
    // m个人的环，序号为0~m-1，报数为N，第i个人出环的编号
    if (i == 1)
        return (m + N - 1) % m;
    else
        return (fun(m - 1, N, i - 1) + N) % m;
}
console.log(fun(10, 3, 1, 10));
