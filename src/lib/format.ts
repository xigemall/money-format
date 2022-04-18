export interface FormatOptions {
  // 小数位数
  decimal?: number;
  // 分割符
  delimiter?: string;
  // 分位数
  digit?: number | boolean;
  // 四舍五入
  round?: boolean;
}

/**
 * 初始参数
 */
const initOptions = {
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
export function format(money: number | string, options: FormatOptions = initOptions): string {
  const option = {...initOptions, ...options};
  const {decimal, delimiter, digit, round} = option;

  const moneyNum = Number(money) * 10 ** (decimal + 1);
  let num = Math.floor(moneyNum / 10);
  if (round) {
    // 四舍五入
    num = Math.ceil(moneyNum / 10);
  }
  const moneyStr = (num / 10 ** decimal).toFixed(decimal);

  const left = moneyStr.split('.')[0];
  const right = moneyStr.split('.')[1];

  const regexp = new RegExp('(\\d)(?=(\\d{' + digit + '})+$)', 'gi');
  const leftFormat = left.replace(regexp, '$1' + delimiter);
  if (!right && typeof right === 'undefined') {
    return leftFormat;
  }
  return leftFormat + '.' + right;
}
