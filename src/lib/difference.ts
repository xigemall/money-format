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
export function difference(val1: Value, val2: Value, options?: Options): Value{
    // 初始化默认选项
    const opts = options ?? initOptions;
    if(!val1 || !val2){
        throw new Error('val1 or val2 is empty');
    }

    // 检查输入是否为空或无效
    if (!isValidNumber(toValidNumber(val1)) || !isValidNumber(toValidNumber(val2))) {
        throw new Error('val1 or val2 is not a valid number');
    }

    // 检查 decimals 是否合法
    if ((Math.floor(opts.decimals) !== opts.decimals) || opts.decimals < 0 || opts.decimals > 14) {
        throw new Error('Invalid decimals value');
    }

    try {
        const total = toValidNumber(val1) - toValidNumber(val2);
        const result = total.toFixed(opts.decimals);

        console.log(opts.decimals === 0 ? `${result}.0` : result)
        // 确保返回值始终包含小数点，即使 decimals 为 0
        return opts.decimals === 0 ? `${result}.0` : result;
    } catch (error) {
        console.error('Error in difference calculation:', error);
        throw new Error('Calculation failed');
    }

}