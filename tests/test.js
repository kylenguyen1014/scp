const assert = require('assert');
const {getMean, getMedian, getMode } = require('../utils')

describe('Get Mean', function() {
    describe('Empty array', function() {
        it('should return undefined if passing empty array', function() {
            assert.strictEqual(getMean([]), undefined);
        })
    })
    describe('Sample array [1, 2, 3]', function() {
        it('should return 2.00', function() {
            assert.strictEqual(getMean([1, 2, 3]), '2.00');
        })
    })
})

describe('Get Median', function() {
    describe('Empty array', function() {
        it('should return undefined if passing empty array', function() {
            assert.strictEqual(getMedian([]), undefined);
        })
    })
    describe('Sample array [1, 1, 1, 2, 3]', function() {
        it('should return 1.00', function() {
            assert.strictEqual(getMedian([1, 1, 1, 2, 3]), '1.00');
        })
    })
    describe('Sample array [3, 2, 2, 1]', function() {
        it('should return 2.00', function() {
            assert.strictEqual(getMedian([3, 2, 2, 1]), '2.00');
        })
    })
})


describe('Get Mode', function() {
    describe('Empty array', function() {
        it('should return undefined if passing empty array', function() {
            assert.strictEqual(getMode([]), undefined);
        })
    })
    describe('Sample array [1, 2, 3]', function() {
        it('should return undefined', function() {
            assert.strictEqual(getMode([1, 2, 3]), undefined);
        })
    })
    describe('Sample array [1, 2, 1, 2, 3, 1]', function() {
        it("should return '1'", function() {
            assert.strictEqual(getMode( [1, 2, 1, 2, 3, 1]).join(', '), '1');
        })
    })
    describe('Sample array [1, 2, 1, 2, 3, 1, 2, 3]', function() {
        it("should return '1'", function() {
            assert.strictEqual(getMode([1, 2, 1, 2, 3, 1, 2, 3]).join(', '), '1, 2');
        })
    })
})