const { expect } = require("chai");
require("mocha-sinon");

require("../index");

const testObject = {
  id: "id-8107",
  number: 626,
  description: "uNaNl)Na",
  anotherObject: [
    {
      testId: "testId-4837"
    }
  ],
  intArray: [353]
};

describe("xxxx()", function() {
  beforeEach(function() {
    const pretty = console.pretty;

    this.sinon.stub(console, "pretty").callsFake(function() {
      return pretty.apply(pretty, arguments);
    });
  });

  afterEach(function() {
    console.pretty.restore();
  });

  context("without arguments", function() {
    it("should not throw", function() {
      console.pretty();
      expect(console.pretty).not.throws;
      expect(console.pretty.calledOnce).to.be.true;
    });
  });

  context("with number arguments", function() {
    it("should throw: TypeError: Expected message to be string", function() {
      console.pretty(4, 4, 4);
      expect(console.pretty).not.throws;
      expect(console.pretty.calledOnce).to.be.true;
      expect(console.pretty.calledWith(4, 4, 4)).to.be.true;
    });
  });

  context("different variations", function() {
    it("should prettify object with description", function() {
      console.pretty(testObject, "test");
      expect(console.pretty.calledOnce).to.be.true;
      expect(console.pretty.calledWith(testObject, "test")).to.be.true;
    });

    it("should prettify object with description & indent", function() {
      console.pretty(testObject, "test", 8);
      expect(console.pretty.calledOnce).to.be.true;
      expect(console.pretty.calledWith(testObject, "test", 8)).to.be.true;
    });

    it("should prettify object with just indent", function() {
      console.pretty(testObject, null, 8);
      expect(console.pretty.calledOnce).to.be.true;
      expect(console.pretty.calledWith(testObject, null, 8)).to.be.true;
    });

    it("should prettify object with just absolute indent number", function() {
      console.pretty(testObject, null, -8);
      expect(console.pretty.calledOnce).to.be.true;
      expect(console.pretty.calledWith(testObject, null, -8)).to.be.true;
    });
  });
});
