module.exports = function (decimalValue) {
  if (isNaN(decimalValue) || String(decimalValue).length === 0) {
      return '';
  }
  var decimalString = String(decimalValue).replace(/\D/g, '');
  var hexValue = Number(decimalString).toString(16);
  // Padding
  while (hexValue.length < 4) {
      hexValue = '0' + hexValue;
  }
  return `\\${hexValue}`;
};