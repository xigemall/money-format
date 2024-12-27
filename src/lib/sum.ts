export interface Options {
    // 小数位数
    decimals?: number;
    // 四舍五入
    round?: boolean;
}

export type Value = number | string;
type Arr = Array<Value>;

export const initOptions = {
    decimals: 2,
    // 四舍五入
    round: true,
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
export function sum(arr: Arr, options?: Options): string {
    // 初始化默认选项
    const opts = {...initOptions, ...options}

    const {decimals, round} = opts;

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
        if ((Math.floor(decimals) !== decimals) || decimals < 0 || decimals > 14) {
            throw new Error('Invalid decimals value');
        }

        const moneyNum = Math.ceil(total * 10 ** (decimals + 1));

        let num = Math.floor(moneyNum / 10)
        if (round) {
            num = Math.round(moneyNum / 10)
        }
        // 返回格式化后的总和字符串
        return (num / 10 ** decimals).toFixed(decimals)
    } catch (error) {
        console.error('Error in sum calculation:', error);
        return '0';
    }
}