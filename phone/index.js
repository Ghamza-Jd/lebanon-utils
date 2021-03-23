const isValid = require("./isValid");
const isMobile = require("./isMobile");
const isLandline = require("./isLandline");
const isTouchOperator = require("./isTouchOperator");
const isAlphaOperator = require("./isAlfaOperator");
const getOperator = require("./getOperator");

module.exports = {
  isValid,
  isMobile,
  isLandline,
  isTouchOperator,
  isAlphaOperator,
  getOperator,
};
