// under dev

const isValid = require("./isValid");

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
  const pattern = /^(i|I|R)?r?([0-9]*|\*)$/;
  if (!pattern.test(formatExpression))
    throw new Error("Incorrect format expression");
  if (!isValid(number)) throw new Error("Invalid phone number");

  for (let i = 0; i < number.length; i++) {}
  return pattern.test(formatExpression);
}

// ik* -> +96103654321
// i* -> +9613654321
// id -> +9613
// iddd -> +961365
// ik*/233 -> +96103 654 321
// ik */233 -> +961 03 654 321
// ik*/233 -> +96103 654 321

// module.exports = formatPhoneNumber;
