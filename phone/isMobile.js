function isMobile(number) {
  const pattern = /^(00961|\+961|961)?0?(3|70|71|76|78|79|81)[0-9]{6}$/;
  return pattern.test(number);
}

module.exports = isMobile;
