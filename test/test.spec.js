/**
 * quick test
 */

// dependencies
var should = require('should');

// module under test
var as2805 = require('../lib/as2805');

// tests
describe('Module as2805', function () {
	var buffer;
	describe('getN function', function () {
		var options, result;
		beforeEach(function () {
			buffer = new Buffer('15239883743894923F12', 'hex');
			options = {
				name: 'cardNumber',
				size: 4
			};
			result = {};
		})
		it('should return the number of characters read from the buffer', function () {
			as2805.getN(buffer, options, result).should.equal(2);
		});
		it('should add the parsed value to the given object', function () {
			as2805.getN(buffer, options, result);
			should.exist(result[options.name]);
		});
		it('should pull out a BCD number with a length of 4 (two bytes)', function () {
			as2805.getN(buffer, options, result);
			result[options.name].should.equal('1523');
		});
		it('should pull out a BCD number with an odd length 5 (three bytes)', function () {
			var consumed = 0;
			buffer = new Buffer('15335F', 'hex');
			options.size = 5;
			consumed = as2805.getN(buffer, options, result);
			result[options.name].should.equal('15335');
			consumed.should.equal(3);
		});
		it.skip('should pull out a BDC number with an initial length index', function () {
			var consumed = 0;

			consumed = as2805.getN(buffer, options, result);
			should.exist(result[options.name]);
		});
	});
});