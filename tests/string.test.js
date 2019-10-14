const { list } = require("../src/list");
const { memq } = require("../src/string");
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
