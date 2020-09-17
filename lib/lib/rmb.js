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
exports.RMB = void 0;
var digit = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖'];
// 单位
var unit = ['元', '拾', '佰', '仟', '万', '拾', '佰', '仟', '亿', '拾', '佰', '仟', '万', '拾', '佰'];
// 小数位
var fraction = ['角', '分'];
/**
 * 初始options
 */
var initOptions = {
    negativeStr: '负',
    integerStr: '整',
    prefix: '',
};
/**
 * 小数位数RMB字符串 | 整
 * @param n
 * @param integerStr
 * @return string
 */
function getRmbFractionStr(n, integerStr) {
    var str = '';
    for (var i = 0; i < fraction.length; i++) {
        str += (digit[Math.floor(n * 10 * Math.pow(10, i)) % 10] + fraction[i]).replace(/零./, '');
    }
    return str || integerStr;
}
/**
 * 整数位RMB字符处理
 * @param n
 */
function getRmbUnitStr(n) {
    var num = Math.floor(n);
    var arr = [];
    for (var i = 0; i < unit.length && num > 0; i++) {
        var item = (digit[Math.floor(num % 10)] + unit[i]);
        arr.push(item);
        num = Math.floor(num / 10);
    }
    var str = arr.reverse().join('');
    var result = str
        .replace(/(零)([元万亿])/g, '$2$1')
        .replace(/(零[拾佰仟])+/g, '零')
        .replace(/零+/g, '零')
        .replace(/(零(?=[元万亿]))*/g, '')
        .replace(/(亿万)/g, '亿')
        .replace(/零$/, '');
    return result || '零元';
}
/**
 * 验证
 * @param money
 */
function validate(money) {
    if (typeof money !== 'number' && typeof money !== 'string') {
        throw new Error('money type must to number or string');
    }
    //最大 999999999999980
    if (Number(money) > 999999999999980) {
        throw new Error('money not greater than 999999999999980');
    }
}
/**
 *
 * @param money
 * @param options
 * @constructor
 */
function RMB(money, options) {
    if (options === void 0) { options = initOptions; }
    validate(money);
    var _a = __assign(__assign({}, initOptions), options), prefix = _a.prefix, negativeStr = _a.negativeStr, integerStr = _a.integerStr;
    var n = Number(money);
    var head = n < 0 ? negativeStr : '';
    n = Math.abs(n);
    // 获取小数位数RMB字符串
    var fractionStr = getRmbFractionStr(n, integerStr);
    // 获取整数位RMB字符串
    var unitStr = getRmbUnitStr(n);
    return prefix + head + unitStr + fractionStr;
}
exports.RMB = RMB;
