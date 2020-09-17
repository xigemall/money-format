'use strict'
const expect = require('chai').expect;
const {format, RMB} = require('../lib/index');

/**
 * 金额format
 */
describe('format function test', () => {
    const value = '1,234,567.00';
    it(`should return success`, () => {
        const result = format(1234567, {
            // 小数位数
            decimal: 2,
            // 分割符
            delimiter: ',',
            // 分位数
            digit: 3,
            // 四舍五入
            round: true,
        });
        expect(result).to.equal(value)
    })
})
/**
 * RMB格式测试
 */
describe('RMB function test', () => {
    it('should return success', () => {
        const result = RMB(10100, {
            // 负数字符串
            negativeStr: '负',
            // 整数字符串
            integerStr: '整',
            // 前缀
            prefix: '',
        });
        expect(result).equal('壹万零壹佰元整')
    })
})
