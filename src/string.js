const { isNull } = require("./isNull");
const { list } = require("./list");
const { head, tail } = require("./pair");

function memq(item, seq) {
  return isNull(seq) ? false : item === head(seq) ? seq : memq(item, tail(seq));
}

module.exports = {
  memq,
};
