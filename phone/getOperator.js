const isValid = require("./isValid");
const isLandline = require("./isLandline");
const isTouchOperator = require("./isTouchOperator");
const isAlfaOperator = require("./isAlfaOperator");

function getOperator(number) {
  if (!isValid(number))
    throw new Error("Invalid phone number or not supported yet");
  if (isLandline(number)) return "Ogero";
  else if (isTouchOperator(number)) return "Touch";
  else if (isAlfaOperator(number)) return "Alfa";
  else throw new Error("Invalid phone number or not supported yet");
}

module.exports = getOperator;
