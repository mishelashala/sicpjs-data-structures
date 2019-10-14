const { isNull } = require("./isNull");
const { head, isPair, pair, tail } = require("./pair");
const { append, list } = require("./list");

function countLeaves(x) {
  return isNull(x) ? 0 : !isPair(x) ? 1 : countLeaves(head(x)) + countLeaves(tail(x));
}

function mapTree(fn, tree) {
  return isNull(tree)
    ? null
    : !isPair(tree)
    ? fn(tree)
    : pair(mapTree(fn, head(tree)), mapTree(fn, tail(tree)));
}

function toList(tree) {
  return isNull(tree)
    ? null
    : !isPair(tree)
    ? list(tree)
    : append(toList(head(tree), toList(tail(tree))));
}

module.exports = {
  countLeaves,
  mapTree,
  toList,
};
