import semicContext from "./semicContext.json";
import tokenizer from "../preprocessing/stem/tokenizer";
import join from "lodash/join";
import uniq from "lodash/uniq";

export default async function(purefilename) {
  return uniq(
    join(
      semicContext.reduce((accumulator, currentValue) => {
        return Object.keys(currentValue).reduce(
          (accumulator2, currentValue2) => {
            return purefilename
              .split(" ")
              .reduce((accumulator3, currentValue3) => {
                if (currentValue3 == tokenizer(currentValue2, "fr")) {
                  accumulator3.push(currentValue[currentValue2]);
                }
                return accumulator3;
              }, accumulator2);
          },
          accumulator
        );
      }, [])
    ).split(",")
  );
}
