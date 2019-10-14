const { isNull } = require("./isNull");
const { head, isPair, pair, tail } = require("./pair");

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

module.exports = {
  countLeaves,
  mapTree,
};
