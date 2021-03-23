const expect = require("chai").expect;

const formatPhoneNumber = require("../../../phone/formatPhoneNumber");

describe("Testing formatPhoneNumber", function () {
  //   it("National format", function () {
  //     const input = {
  //       number: "01654321",
  //       expr: "pdd",
  //     };
  //     const formatedNbr = formatPhoneNumber(input.number, input.expr);
  //     expect(formatedNbr).to.be.equal("+96116");
  //   });
  //   it("National format", function () {
  //     const input = {
  //       number: "01654321",
  //       expr: "pkdd",
  //     };
  //     const formatedNbr = formatPhoneNumber(input.number, input.expr);
  //     expect(formatedNbr).to.be.equal("+961016");
  //   });
  it("National format", function () {
    const input = {
      number: "1654321",
      expr: "p*133",
    };
    const formatedNbr = formatPhoneNumber(input.number, input.expr);
    expect(formatedNbr).to.be.equal("+961 1 654 321");
  });
});
