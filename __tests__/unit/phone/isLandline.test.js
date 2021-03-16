const expect = require("chai").expect;

const isLandline = require("../../../phone/isLandline");

describe("Testing isLandline", function () {
  describe("Beirut - starts with 01", function () {
    it("National format", function () {
      const number = "01654321";
      const validity = isLandline(number);
      expect(validity).to.be.true;
    });
    it("National format; wrong length", function () {
      const number = "016543210";
      const validity = isLandline(number);
      expect(validity).to.be.false;
    });
    it("National format; national trunk prefix 0", function () {
      const number = "1654321";
      const validity = isLandline(number);
      expect(validity).to.be.true;
    });

    it("Internation format", function () {
      const number = "96101654321";
      const validity = isLandline(number);
      expect(validity).to.be.true;
    });
    it("Internation format; international trunk prefix 00", function () {
      const number = "0096101654321";
      const validity = isLandline(number);
      expect(validity).to.be.true;
    });
    it("Internation format; international trunk prefix +", function () {
      const number = "+96101654321";
      const validity = isLandline(number);
      expect(validity).to.be.true;
    });
    it("Internation format; without national trunk prefix", function () {
      const number = "9611654321";
      const validity = isLandline(number);
      expect(validity).to.be.true;
    });
    it("Internation format; international trunk prefix 00; without national trunk prefix", function () {
      const number = "009611654321";
      const validity = isLandline(number);
      expect(validity).to.be.true;
    });
    it("Internation format; international trunk prefix +; without national trunk prefix", function () {
      const number = "+9611654321";
      const validity = isLandline(number);
      expect(validity).to.be.true;
    });

    it("Internation format; wrong length", function () {
      const number = "961016543210";
      const validity = isLandline(number);
      expect(validity).to.be.false;
    });
    it("Internation format; international trunk prefix 00; wrong length", function () {
      const number = "00961016543210";
      const validity = isLandline(number);
      expect(validity).to.be.false;
    });
    it("Internation format; international trunk prefix +; wrong length", function () {
      const number = "+961016543210";
      const validity = isLandline(number);
      expect(validity).to.be.false;
    });
    it("Internation format; without national trunk prefix; wrong length", function () {
      const number = "96116543210";
      const validity = isLandline(number);
      expect(validity).to.be.false;
    });
    it("Internation format; international trunk prefix 00; without national trunk prefix; wrong length", function () {
      const number = "0096116543210";
      const validity = isLandline(number);
      expect(validity).to.be.false;
    });
    it("Internation format; international trunk prefix +; without national trunk prefix; wrong length", function () {
      const number = "+96116543210";
      const validity = isLandline(number);
      expect(validity).to.be.false;
    });
  });
  describe("Mount Lebanon, Metn District - starts with 04", function () {
    it("National format", function () {
      const number = "04654321";
      const validity = isLandline(number);
      expect(validity).to.be.true;
    });
    it("National format; wrong length", function () {
      const number = "046543210";
      const validity = isLandline(number);
      expect(validity).to.be.false;
    });
    it("National format; national trunk prefix 0", function () {
      const number = "4654321";
      const validity = isLandline(number);
      expect(validity).to.be.true;
    });

    it("Internation format", function () {
      const number = "96104654321";
      const validity = isLandline(number);
      expect(validity).to.be.true;
    });
    it("Internation format; international trunk prefix 00", function () {
      const number = "0096104654321";
      const validity = isLandline(number);
      expect(validity).to.be.true;
    });
    it("Internation format; international trunk prefix +", function () {
      const number = "+96104654321";
      const validity = isLandline(number);
      expect(validity).to.be.true;
    });
    it("Internation format; without national trunk prefix", function () {
      const number = "9614654321";
      const validity = isLandline(number);
      expect(validity).to.be.true;
    });
    it("Internation format; international trunk prefix 00; without national trunk prefix", function () {
      const number = "009614654321";
      const validity = isLandline(number);
      expect(validity).to.be.true;
    });
    it("Internation format; international trunk prefix +; without national trunk prefix", function () {
      const number = "+9614654321";
      const validity = isLandline(number);
      expect(validity).to.be.true;
    });

    it("Internation format; wrong length", function () {
      const number = "961046543210";
      const validity = isLandline(number);
      expect(validity).to.be.false;
    });
    it("Internation format; international trunk prefix 00; wrong length", function () {
      const number = "00961046543210";
      const validity = isLandline(number);
      expect(validity).to.be.false;
    });
    it("Internation format; international trunk prefix +; wrong length", function () {
      const number = "+961046543210";
      const validity = isLandline(number);
      expect(validity).to.be.false;
    });
    it("Internation format; without national trunk prefix; wrong length", function () {
      const number = "96146543210";
      const validity = isLandline(number);
      expect(validity).to.be.false;
    });
    it("Internation format; international trunk prefix 00; without national trunk prefix; wrong length", function () {
      const number = "0096146543210";
      const validity = isLandline(number);
      expect(validity).to.be.false;
    });
    it("Internation format; international trunk prefix +; without national trunk prefix; wrong length", function () {
      const number = "+96146543210";
      const validity = isLandline(number);
      expect(validity).to.be.false;
    });
  });
});
