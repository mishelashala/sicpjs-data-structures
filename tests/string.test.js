const { list } = require("../src/list");
const { memq, isEqual } = require("../src/string");
const { expect } = require("chai");

describe("memq", () => {
  it("should return false if the item is not present in the list", () => {
    const r = memq("apple", list("wut", "foo"));
    expect(r).to.be.equal(false);
  });

  it("should return the list if the item is present", () => {
    const l = list("apple", "wut", "foo");
    const r = memq("apple", l);

    expect(r).to.be.deep.equal(l);
  });
});

describe("isEqual", () => {
  it("should return true if the lists are equal", () => {
    const r = isEqual(list("1", "2"), list("1", "2"));
    expect(r).to.be.equal(true);
  });

  it("should return false if the first list is not equal to the second", () => {
    const r = isEqual(list("1", "2", "3"), list("1", "2"));
    expect(r).to.be.equal(false);
  });

  it("should return false if the second list is not equal to the first", () => {
    const r = isEqual(list("1", "2"), list("1", "2", "3"));
    expect(r).to.be.equal(false);
  });
});
