var tokenizer = require("./stem/tokenizer");

global.search = function() {
  document.getElementById("result").innerHTML = tokenizer(
    document.getElementById("search").value,
    "fr"
  ).join(" ");
};
