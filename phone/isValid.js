function isValid(number) {
  const pattern = /^(00961|\+961|961)?0?(1|3|4|5|6|70|71|76|78|79|8|81|9)[0-9]{6}$/;
  return pattern.test(number);
}

module.exports = isValid;
