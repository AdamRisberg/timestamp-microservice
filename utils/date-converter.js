var moment = require("moment");

module.exports = function (str) {
  var date = /^\d+$/.test(str) ? moment(str, "X") : moment(str, "MMMM D, YYYY");

  if (!date.isValid()) {
    return { unix: null, natural: null };
  }
  return {
    unix: date.format("X"),
    natural: date.format("MMMM D, YYYY")
  };
};