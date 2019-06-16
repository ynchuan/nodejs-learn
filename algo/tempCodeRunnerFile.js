var fun = function (m, k, i) {
    // m个人的环，报数为k，第i个人出环的编号
    if (i == 1)
        return (m + k - 1) % m;
    else
        return (fun(m - 1, k, i - 1) + k) % m;
}
console.log(fun(10, 3, 10));
