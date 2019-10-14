const { isNull } = require("./isNull");
const { list } = require("./list");
const { head, tail, isPair } = require("./pair");

function memq(item, seq) {
  return isNull(seq) ? false : item === head(seq) ? seq : memq(item, tail(seq));
}

function isEqual(a, b) {
  return isPair(a) && isPair(b)
    ? head(a) === head(b)
      ? isEqual(tail(a), tail(b))
      : false
    : !(isPair(a) || isPair(b));
}

module.exports = {
  isEqual,
  memq,
};
