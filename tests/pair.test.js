const { expect } = require("chai");
const { head, isPair, len, pair, tail } = require("../src/pair");

describe("pair", () => {
  it("should create a pair with values 1 and 2", () => {
    const p = pair(1, 2);
    expect(p.length).to.be.equal(2);
    expect(p[0]).to.be.equal(1);
    expect(p[1]).to.be.equal(2);
  });
});

describe("isPair", () => {
  it("should return true if it is a valid pair", () => {
    const p = pair(1, 2);
    expect(isPair(p)).to.be.equal(true);
  });

  it("should return false if it is not a valid pair", () => {
    const notAPair = [1, 2, 3];
    expect(isPair(notAPair)).to.be.equal(false);
  });
});

describe("head", () => {
  it("should return the first element of a pair", () => {
    const h = head(pair(1, 2));
    expect(h).to.be.equal(1);
  });
});

describe("tail", () => {
  it("should return the last element of a pair", () => {
    const t = tail(pair(1, 2));
    expect(t).to.be.equal(2);
  });
});
