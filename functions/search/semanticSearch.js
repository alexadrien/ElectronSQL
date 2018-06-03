import cleaning from "../preprocessing/cleaning";
import getSemanticSignature from "../semantique/getSignature";
import tokenizer from "../preprocessing/stem/tokenizer";

export default async function(queryString, equivalences) {
  return (await getSemanticSignature(
    tokenizer(cleaning(queryString, equivalences), "fr").join(" ")
  )).reduce((accumulator, currentValue) => {
    accumulator.push(
      `SELECT ROWID FROM files WHERE UPPER(semantique) LIKE '%\"${currentValue}\"%'`
    );
    return accumulator;
  }, []);
}
