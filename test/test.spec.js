/**
 * quick test
 */

// dependencies
var should = require('should');

// tests
describe('Hello world test', function () {
	var hello = 'world';
	it('should be world', function () {
		hello.should.equal('world');
	});
});