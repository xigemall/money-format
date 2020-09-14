'use strict'
const expect = require('chai').expect;
const format = require('../lib/index').format;

describe('format function test', () => {
    const value = '1,234,567.00';
    it(`should return success`, () => {
        const result = format(1234567);
        expect(result).to.equal(value)
    })
})
