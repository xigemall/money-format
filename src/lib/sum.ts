export interface Options {
    // 小数位数
    decimals: number;
}

export type Value = number | string;
type Arr = Array<Value>;

export const initOptions: Options = {
    decimals: 2
}


/**
 * 验证并转换数组中的元素为数字
 * @param arr 数组，包含要相加的数字或数字字符串
 * @returns 转换后的数字数组，无法转换的元素会被过滤掉
 */
function validateAndConvert(arr: Arr): number[] {
    return arr.map(item => {
        const num = Number(item);
        return isNaN(num) ? null : num;
    }).filter((num): num is number => num !== null);
}

/**
 * 计算数组中元素的总和，并根据选项格式化结果
 * @param arr 数组，包含要相加的数字或数字字符串
 * @param options 可选的计算选项，包括小数位数
 * @returns 根据选项格式化后的总和字符串
 */
export function sum(arr: Arr, options?: Options): Value {
    // 初始化默认选项
    const opts = options ?? initOptions;

    // 验证并转换输入数组
    const validNumbers = validateAndConvert(arr);

    // 检查数组是否为空
    if (validNumbers.length === 0) {
        return '0';
    }


    try {
        // 计算总和
        const total = validNumbers.reduce((previousValue, currentValue) => previousValue + currentValue, 0);

        // 检查 decimals 是否合法
        if ((Math.floor(opts.decimals) !== opts.decimals) || opts.decimals < 0 || opts.decimals > 14) {
            throw new Error('Invalid decimals value');
        }

        // 返回格式化后的总和字符串
        return total.toFixed(opts.decimals);
    } catch (error) {
        console.error('Error in sum calculation:', error);
        return '0';
    }
}