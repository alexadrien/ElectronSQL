import tokenizer from "./stem/tokenizer";

export default function(filename) {
  return tokenizer(filename, "fr").join(" ");
}
