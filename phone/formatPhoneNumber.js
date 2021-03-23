const isValid = require("./isValid");
const formatter = require("../helpers/lebonumberGrammar");

function formatPhoneNumber(number, formatExpression) {
  /**
   * i: +961 - + trunk prefix
   * I: 00961 - 00 trunk prefix
   * R: 961 - remove international trunk prefix
   * k: keep national trunk prefix
   * *: rest of the digits
   * * /223: rest of the digits
   * d: digit
   */
  if (!isValid(number)) throw new Error("Invalid phone number");
  return formatter(number.substr(number.length - 7), formatExpression);
}

// ik* -> +96103654321
// i* -> +9613654321
// id -> +9613
// iddd -> +961365
// ik*/233 -> +96103 654 321
// ik */233 -> +961 03 654 321
// ik*/233 -> +96103 654 321

module.exports = formatPhoneNumber;
