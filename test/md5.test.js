"use strict";

var md5 = require('../');
var should = require('chai').should();

describe('md5.test.js', function() {
	describe('md5()', function() {
		it('should be empty when the string is empty', function() {
			var m = md5('');
			m.should.not.be.empty;
		});

		it('should throw an error when the data is not a string or buffer', function() {
			(md5(null)).should.throw();
			(md5({})).should.throw();
			(md5([])).should.throw();
		});
	});	
});
