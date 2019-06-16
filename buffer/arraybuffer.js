var ab1 = new ArrayBuffer(16);
var ab2 = new ArrayBuffer(8);
var uint16 = new Uint16Array(ab1);
var dv = new DataView(ab2);
// 大端序列：低字节为高位 ；小端序列：高字节为高位
uint16[0] = 258; // 默认小端序列，从小到大为低位到高位 2, 1
dv.setUint16(0, 259); // 默认大端序列，从小到大为高位到低位 1, 3
dv.setUint16(2, 260, true); // 2标识字节位置，小端序列 4, 1
//  1, 3, 4, 1
dv.getUint16(0); // 259
dv.getUint16(2, true); // 260
