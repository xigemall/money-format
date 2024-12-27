import { Value, Options, initOptions } from './sum'

function isValidNumber(value: any): value is number {
    return typeof value === 'number' && !isNaN(value);
}

function toValidNumber(value: Value): number {
    if (typeof value === 'string') {
        const num = parseFloat(value);
        if (!isNaN(num)) {
            return num;
        }
    } else if (typeof value === 'number') {
        return value;
    }
    throw new Error('Invalid number format');
}

/**
 * 计算两个值的差值
 *
 * 此函数接受两个值作为输入，并返回它们的差值结果可以通过可选的选项参数进行配置，以控制输出的精度
 *
 * @param val1 第一个值，可以是任何可以转换为数字的值
 * @param val2 第二个值，可以是任何可以转换为数字的值
 * @param options 可选的配置对象，包含控制计算和输出的各种选项
 * @returns 返回两个值的差值，格式化为字符串
 * @throws 如果输入值无效或配置不正确，将抛出错误
 */
export function difference(val1: Value, val2: Value, options?: Options): string {
    // 初始化默认选项
    const opts = {...initOptions, ...options}

    const {decimals, round} = opts;

    // 检查输入值是否为空
    if (!val1 || !val2) {
        throw new Error('val1 or val2 is empty');
    }

    // 检查输入是否为空或无效
    if (!isValidNumber(toValidNumber(val1)) || !isValidNumber(toValidNumber(val2))) {
        throw new Error('val1 or val2 is not a valid number');
    }

    // 检查 decimals 是否合法
    if ((Math.floor(decimals) !== decimals) || decimals < 0 || decimals > 14) {
        throw new Error('Invalid decimals value');
    }

    try {
        // 计算差值
        const total = toValidNumber(val1) - toValidNumber(val2);

        const moneyNum = Math.ceil(total * 10 ** (decimals + 1));

        let num = Math.floor(moneyNum / 10)
        if (round) {
            num = Math.round(moneyNum / 10)
        }
        return (num / 10 ** decimals).toFixed(decimals)
    } catch (error) {
        console.error('Error in difference calculation:', error);
        throw new Error('Calculation failed');
    }

}