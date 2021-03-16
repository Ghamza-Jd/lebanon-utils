function isTouchOperator(number) {
  const pattern = /(00961|\+961|961)?0?(36|37|38|39|700|706|707|708|709|711|712|713|714|715|760|766|767|768|769|816|817)/;
  return pattern.test(number);
}

module.exports = isTouchOperator;
