var ab = new ArrayBuffer(2);
var int16View = new Uint16Array(ab);
var int8View = new Uint8Array(ab);
int16View[0] = 0x01;
if (int8View[0] === 0 && int8View[1] === 1) {
    console.log('BIG_ENDIAN');
}
else {
    console.log('LITTLE_ENDIAN');
}

var abToStr = function (ab) {
    var uint16 = new Uint16Array(ab);
    let len = uint16.length;
    let ret = '';
    for (var i = 0; i < len; i++) {
        ret += String.fromCharCode(uint16[i]);
    }
    return ret;
};

var strToAb = function (str) {
    var len = str.length;
    var ret = new ArrayBuffer(len * 2);
    var view = new Uint16Array(ret);
    for (var i = 0; i < len; i++) {
        view[i] = str.charCodeAt(i);
    }
    return ret;
}

var test = '测试数组90+ab';
var testArr = strToAb(test);
var testStr = abToStr(testArr);
console.log(test);
console.log(testArr);
console.log(testStr);

`set|slice|subarray|TypedArray.from([1,2,3])|TypeArray.of(1,2,3)|new TypedArray([1,2,3])`
