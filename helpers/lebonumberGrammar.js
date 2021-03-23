const ohm = require("ohm-js");

/* This function is under experiment, we still need to test it on other framework such as react native */
/* Also we still thinking of the correct approach for it, is parsing and appling the express to a grammar is the correct one? */

function formatter(phoneNumber, expr) {
  var index = 0;
  const grammar = ohm.grammar(`
    Lebonumber {
      Start
        = I11l

      I11l
        = "p" Trunk -- plus
        | "z" Trunk -- zero
        | "i" Trunk -- none
        | Trunk     -- remove
      
      Trunk
        = "k" National  -- keep
        | National      -- ignore

      National
        = "d" National  -- singleDigit
        | "*" Rest      -- rest
        | lambda        -- empty
      
      Rest
        = number    -- seperators
        | lambda    -- empty
    
      number
        = digit+

      lambda
        = 
    }
`);

  const semantics = grammar.createSemantics().addOperation("eval", {
    I11l_plus(_char, next) {
      return "+961" + next.eval();
    },
    I11l_zero(_char, next) {
      return "00961" + next.eval();
    },
    I11l_none(_char, next) {
      return "961" + next.eval();
    },
    I11l_remove(next) {
      return next.eval();
    },
    Trunk_keep(_char, next) {
      return "0" + next.eval();
    },
    Trunk_ignore(next) {
      return next.eval();
    },
    National_singleDigit(_digit, next) {
      return phoneNumber[index++] + next.eval();
    },
    National_rest(_char, next) {
      return next.eval();
    },
    National_empty(_empty) {
      return phoneNumber.substr(index);
    },
    Rest_seperators(_number) {
      var str = "";
      this.sourceString.split("").forEach((val) => {
        str += " ";
        for (let i = 0; i < parseInt(val); i++) {
          str += phoneNumber[index++];
        }
      });
      return str;
    },
    Rest_empty(_empty) {
      return "";
    },
  });

  try {
    const match = grammar.match(expr);
    return semantics(match).eval();
  } catch (e) {
    throw new Error("Incorrect format expression");
  }
}

module.exports = formatter;
