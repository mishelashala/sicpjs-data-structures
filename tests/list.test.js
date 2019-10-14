const { expect } = require("chai");
const { pair } = require("../src/pair");
const {
  accumulate,
  append,
  at,
  filter,
  interval,
  lastPair,
  len,
  list,
  map,
  reverse,
} = require("../src/list");

describe("list", () => {
  it("should create a list of n elements", () => {
    const l = list(1, 2, 3);
    expect(len(l)).to.be.equal(3);
    expect(at(3, l)).to.be.equal(null);
  });
});

describe("append", () => {
  it("should append one list to another", () => {
    const l1 = list(1, 2);
    const l2 = list(3, 4);
    const r = append(l1, l2);

    expect(len(r)).to.be.equal(4);
    expect(at(0, r)).to.be.equal(1);
    expect(at(1, r)).to.be.equal(2);
    expect(at(2, r)).to.be.equal(3);
    expect(at(3, r)).to.be.equal(4);
  });
});

describe("len", () => {
  it("should return the length of a list", () => {
    const l = list(1, 2, 3);
    expect(len(l)).to.be.equal(3);
  });
});

describe("at", () => {
  it("should return the element in the nth position", () => {
    const l = list(1, 2, 3);
    expect(at(0, l)).to.be.equal(1);
    expect(at(1, l)).to.be.equal(2);
    expect(at(2, l)).to.be.equal(3);
  });
});

describe("reverse", () => {
  it("should reverse the elements of a list", () => {
    const l = list(1, 2, 3);
    const r = reverse(l);
    expect(len(l)).to.be.equal(3);
    expect(at(0, r)).to.be.equal(3);
    expect(at(1, r)).to.be.equal(2);
    expect(at(2, r)).to.be.equal(1);
  });
});

describe("map", () => {
  it("should apply a transformation to every element of the list", () => {
    const l = list(1, 2, 3);
    const inc = x => x + 1;
    const r = map(inc, l);

    expect(len(r)).to.be.equal(3);
    expect(at(0, r)).to.be.equal(2);
    expect(at(1, r)).to.be.equal(3);
    expect(at(2, r)).to.be.equal(4);
  });
});

describe("filter", () => {
  it("should filter out every element in the list that doesnt comply with the criteria", () => {
    const l = list(1, 2, 3, 4);
    const isEven = x => x % 2 === 0;
    const r = filter(isEven, l);

    expect(len(r)).to.be.equal(2);
    expect(at(0, r)).to.be.equal(2);
    expect(at(1, r)).to.be.equal(4);
  });
});

describe("lastPair", () => {
  it("should return the last pair in the list", () => {
    const l = list(1, 2, 3, 4);
    const r = lastPair(l);

    expect(len(r)).to.be.equal(1);
    expect(at(0, r)).to.be.equal(4);
    expect(at(1, r)).to.be.equal(null);
  });
});

describe("accumulate", () => {
  it("should sum every item in the list", () => {
    const l = list(1, 2, 3);
    const r = accumulate((x, y) => x + y, 0, l);

    expect(r).to.be.equal(6);
  });

  it("should multiply every item in the list", () => {
    const l = list(1, 2, 3);
    const r = accumulate((x, y) => x * y, 1, l);

    expect(r).to.be.equal(6);
  });

  it("should preserve the identity of the list", () => {
    const l = list(1, 2, 3);
    const r = accumulate(pair, null, l);

    expect(r).to.be.deep.equal(list(1, 2, 3));
  });
});

describe("accumulate", () => {
  it("should create an interval from 0 to 1", () => {
    const r = interval(0, 1);

    expect(len(r)).to.be.equal(2);
    expect(at(0, r)).to.be.equal(0);
    expect(at(1, r)).to.be.equal(1);
  });

  it("should create an interval from 0 to 2", () => {
    const r = interval(0, 2);

    expect(len(r)).to.be.equal(3);
    expect(at(0, r)).to.be.equal(0);
    expect(at(1, r)).to.be.equal(1);
    expect(at(2, r)).to.be.equal(2);
  });

  it("should return null if the interval is not valid", () => {
    const r = interval(3, 2);

    expect(r).to.be.equal(null);
  });
});
