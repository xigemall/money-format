"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.format = void 0;
/**
 * 初始参数
 */
var initOptions = {
    // 小数位数
    decimal: 2,
    // 分割符
    delimiter: ',',
    // 分位数
    digit: 3,
    // 四舍五入
    round: true,
};
/**
 *
 * @param money
 * @param options
 */
function format(money, options) {
    if (options === void 0) { options = initOptions; }
    var option = __assign(__assign({}, initOptions), options);
    var decimal = option.decimal, delimiter = option.delimiter, digit = option.digit, round = option.round;
    var moneyStr = String(Number(money).toFixed(decimal));
    if (!round) {
        var temp = String(Math.floor(parseFloat(String(money)) * Math.pow(10, decimal)));
        var leftMoney = temp.substring(0, temp.length - decimal);
        var rightDecimal = temp.substr(temp.length - decimal);
        moneyStr = leftMoney + '.' + rightDecimal;
    }
    var left = moneyStr.split('.')[0];
    var right = moneyStr.split('.')[1];
    var regexp = new RegExp('(\\d)(?=(\\d{' + digit + '})+$)', 'gi');
    var leftFormat = left.replace(regexp, '$1' + delimiter);
    if (!right && typeof right === 'undefined') {
        return leftFormat;
    }
    return leftFormat + '.' + right;
}
exports.format = format;
