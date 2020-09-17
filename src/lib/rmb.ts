const digit: string[] = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖'];

// 单位
const unit: string[] = ['元', '拾', '佰', '仟', '万', '拾', '佰', '仟', '亿', '拾', '佰', '仟', '万', '拾', '佰'];

// 小数位
const fraction: string[] = ['角', '分'];


export interface RmbOptions {
    // 前缀
    prefix?: string;
    // 负数字符串
    negativeStr?: string | boolean;
    // 整数字符串
    integerStr?: string;
}

/**
 * 初始options
 */
const initOptions = {
    negativeStr: '负',
    integerStr: '整',
    prefix: '',
}

/**
 * 小数位数RMB字符串 | 整
 * @param n
 * @param integerStr
 * @return string
 */
function getRmbFractionStr(n: number, integerStr: string): string {
    let str: string = '';
    for (let i = 0; i < fraction.length; i++) {
        str += (digit[Math.floor(n * 10 * Math.pow(10, i)) % 10] + fraction[i]).replace(/零./, '');
    }

    return str || integerStr;

}

/**
 * 整数位RMB字符处理
 * @param n
 */
function getRmbUnitStr(n: number): string {
    let num = Math.floor(n);
    let arr: string[] = [];
    for (let i = 0; i < unit.length && num > 0; i++) {
        const item = (digit[Math.floor(num % 10)] + unit[i]);
        arr.push(item);
        num = Math.floor(num / 10);
    }
    const str = arr.reverse().join('');
    const result = str
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
function validate(money: number | string): void {
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
export function RMB(
    money: string | number,
    options: RmbOptions = initOptions
): string {
    validate(money);
    const { prefix, negativeStr, integerStr } = { ...initOptions, ...options }
    let n = Number(money);
    const head = n < 0 ? negativeStr : '';
    n = Math.abs(n);

    // 获取小数位数RMB字符串
    const fractionStr = getRmbFractionStr(n, integerStr);
    // 获取整数位RMB字符串
    const unitStr = getRmbUnitStr(n);

    return prefix + head + unitStr + fractionStr;
}
