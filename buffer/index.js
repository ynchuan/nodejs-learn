//        unicode - utf8
// 这是  -\u8fd9\u662f - &#x8FD9;&#x662F;
// buffer -\u0062\u0075\u0066\u0066\u0065\u0072 - buffer
const buf = Buffer.from('buffer');
const buf1 = Buffer.from('这是buffer');
const buf2 = Buffer.from('这是buffer', 'ascii');
const buf3 = Buffer.from('d92f627566666572', 'hex');
const buf4 = Buffer.alloc(100);
buf4.write('hello world!');
const buf5 = Buffer.from([65, 49, 0x66, 0x66, 0x65, 0x72]);
console.log(buf);
console.log(buf1);
console.log(buf2);
console.log(buf3);
console.log(buf3.toString());
console.log(buf4.toString());
console.log('---');
console.log(buf5);
const utf8Buffer = Buffer.from('\u039a\u0391\u03a3\u03a3\u0395', 'utf8');
const utf16Buffer = Buffer.from('\u039a\u0391\u03a3\u03a3\u0395', 'utf16le');
console.log(utf8Buffer);
console.log(utf16Buffer);

const arr = new Uint16Array(2);

arr[0] = 5000;
arr[1] = 4000;

// 拷贝 `arr` 的内容。
const buf6 = Buffer.from(arr);
// 与 `arr` 共享内存。
const buf7 = Buffer.from(arr.buffer);

console.log(buf6);
// 输出: <Buffer 88 a0>
console.log(buf7);
// 输出: <Buffer 88 13 a0 0f>

arr[1] = 6000;

console.log(buf1);
// 输出: <Buffer 88 a0>
console.log(buf2);
