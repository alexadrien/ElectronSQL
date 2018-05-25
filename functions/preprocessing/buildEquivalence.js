import fs from "fs";

const equiPath = "./functions/preprocessing/equivalences.csv";

export default async function() {
  const equiv = (await fs.readFileSync(equiPath, "utf8"))
    .split("\r\n")
    .map(item => {
      return item.split(";");
    });

  let equivTree = {};
  equiv.forEach(item => {
    item.forEach((itemOfItem, index) => {
      if (index != 0 && itemOfItem != "") {
        equivTree[itemOfItem] = item[0];
      }
    });
  });

  return equivTree;
}
