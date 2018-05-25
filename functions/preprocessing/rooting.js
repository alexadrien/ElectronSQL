import tokenizer from "./stem/tokenizer";

export default async function(filename) {
  return tokenizer(filename, "fr").join(" ");
}
