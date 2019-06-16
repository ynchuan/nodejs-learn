/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 *
 * https://leetcode-cn.com/problems/reverse-integer/description/
 *
 * algorithms
 * Easy (31.51%)
 * Total Accepted:    92.7K
 * Total Submissions: 290.9K
 * Testcase Example:  '123'
 *
 * 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。
 *
 * 示例 1:
 *
 * 输入: 123
 * 输出: 321
 *
 *
 * 示例 2:
 *
 * 输入: -123
 * 输出: -321
 *
 *
 * 示例 3:
 *
 * 输入: 120
 * 输出: 021
 *
 *
 * 注意:
 *
 * 假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−2^31,  2^31 − 1]。请根据这个假设，如果反转后整数溢出那么就返回
 * 0。
 *
 */
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    var h = x;
    var nums = [];
    var rst = 0;
    if (h > 0) {
        while (h > 0) {
            nums.push(h % 10);
            h = Math.floor(h / 10);
        }
    }
    else {
        while (h < 0) {
            nums.push(h % 10);
            h = Math.ceil(h / 10);
        }
    }

    var len = nums.length;
    if (len) {
        for (var i = 0; i < len; i++) {
            rst += nums[i] * Math.pow(10, len - i - 1);
        }
    }
    console.log(rst);
    return rst;
};
reverse(-32190);
