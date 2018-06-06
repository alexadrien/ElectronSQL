module.exports = function(str, lang) {
  const de = require("./de.js");
  const en = require("./en.js");
  const fr = require("./fr.js");

  var words = str.replace(/[^a-zA-Z0-9\u00C0-\u00FF]+/g, " ").split(" "),
    lang = lang || "en";

  let stem;
  switch (lang) {
    case "de":
      stem = de;
      break;
    case "en":
      stem = en;
      break;
    case "fr":
      stem = fr;
      break;
    default:
      stem = fr;
  }
  for (var i = 0, l = words.length; i < l; i++) {
    words[i] = stem(words[i]);
  }

  return words;
};
