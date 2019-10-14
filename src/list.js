const { head, pair, tail } = require("./pair");
const { isNull } = require("./isNull");

function list(...args) {
  return args.reduceRight((l, a) => {
    return pair(a, l);
  }, null);
}

function append(a, b) {
  return isNull(a) ? b : pair(head(a), append(tail(a), b));
}

function len(seq) {
  return isNull(seq) ? 0 : 1 + len(tail(seq));
}

function reverse(seq) {
  return isNull(seq) ? seq : append(reverse(tail(seq)), pair(head(seq), null));
}

function map(f, l) {
  return isNull(l) ? null : pair(f(head(l)), map(f, tail(l)));
}

function filter(fn, seq) {
  return isNull(seq)
    ? null
    : fn(head(seq))
    ? pair(head(seq), filter(fn, tail(seq)))
    : filter(fn, tail(seq));
}

function at(n, l) {
  return n === 0 ? head(l) : at(n - 1, tail(l));
}

function lastPair(seq) {
  return isNull(tail(seq)) ? seq : lastPair(tail(seq));
}

module.exports = {
  at,
  append,
  filter,
  lastPair,
  len,
  list,
  map,
  reverse,
};
