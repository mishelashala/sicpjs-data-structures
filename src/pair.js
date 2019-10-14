const { isNull } = require("./isNull");

function pair(a, b) {
  return [a, b];
}

function isPair(x) {
  return isNull(x) ? false : x.length === 2;
}

function head(x) {
  return isNull(x) ? null : x[0];
}

function tail(x) {
  return isNull(x) ? null : x[1];
}

module.exports = {
  head,
  isPair,
  isNull,
  pair,
  tail,
};
