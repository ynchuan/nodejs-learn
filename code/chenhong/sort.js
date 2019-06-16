let test = [3, 4, 1, 6, 9, 5];

// function sortA(data) {
//     if (data.length <= 1) {
//         return data;
//     }
//     var b = [];
//     var c = [];
//     var temp = data[0];
//     for (i = 1; i < data.length; i++) {
//         if (data[i] <= temp) {
//             b.push(data[i]);
//         }
//         else {
//             c.push(data[i]);
//         }
//     }
//     return arguments.callee(b).concat(temp, arguments.callee(c));
// };

//冒泡
// let sortA = function (data) {
//     var temp;
//     for (i = 0; i < data.length; i++) {
//         for (j = 0; j < data.length-i; j++) {
//             if (data[j] > data[j+1]) {
//                 temp = data[i];
//                 data[i] = data[j];
//                 data[j] = temp;
//             }
//         }
//     }
//     return data;
// }

//选择
// let sortA = function (data) {
//     var min;
//     for (i = 0; i < data.length; i++) {
//         min = i;
//         for (j = i; j < data.length; j++) {
//             if (data[j] < data[min]) {
//                 min = j;
//             }
//         }
//         if (min != i) {
//             var temp = data[i];
//             data[i] = data[min];
//             data[min] = temp;
//         }
//     }
//     return data;
// }

//插入
// let sortA = function (data) {
//     var b = [];
//     var flag;
//     b.push(data[0]);
//     for (i = 1; i < data.length; i++) {
//         flag = false;
//         for (j = b.length - 1; j >= 0; j--) {
//             if (b[j] < data[i]) {
//                 b.splice(j + 1, 0, data[i]);
//                 flag = true;
//                 break;
//             }
//         }
//         if (!flag) {
//             b.unshift(data[i]);
//         }
//     }
//     return b;
// }

console.log(test);
console.log(sortA(test));
