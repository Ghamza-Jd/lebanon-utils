function isLandline(number) {
  const pattern = /^(00961|\+961|961)?0?(1|4|5|6|7|8|9)[0-9]{6}$/;
  return pattern.test(number);
}

module.exports = isLandline;
