var codeToAscii = require('./index.js');
var assert = require('assert');

describe('decimal-to-css-ascii', function() {
  it('should convert a decimal to its ascii string value', function() {
    assert.equal('\\e800', codeToAscii(59392));
    assert.equal('\\e833', codeToAscii(59443));
    assert.equal('\\f0d5', codeToAscii(61653));
  });
  it('should return an empty string value if the provided value is not a number', function() {
    assert.equal('', codeToAscii('abcd'));
  });
  it('should return an empty string value if no value is provided', function() {
    assert.equal('', codeToAscii());
  });
  it('should return an empty string value if the provided value is empty', function() {
    assert.equal('', codeToAscii(''));
  });
});
