import litteralSearch from "../search/litteralSearch";
import semanticSearch from "../search/semanticSearch";
import get from "lodash/get";
import head from "lodash/head";
import join from "lodash/join";
import countBy from "lodash/countBy";

export default function(ipcMain, db, equivalences) {
  ipcMain.on("queryChannel", async (event, queryString, searchOptions) => {
    try {
      let litteralReturnedResults = [];
      if (searchOptions.litteral) {
        const litteralString = litteralSearch(queryString);
        const litteralResults = await db.exec(litteralString);

        litteralReturnedResults = get(
          head(litteralResults),
          "values",
          []
        ).slice();
      }
      let semanticReturnedResults = [];
      if (searchOptions.semantic) {
        const semanticStrings = await semanticSearch(queryString, equivalences);
        const results = await Promise.all(
          semanticStrings.map(async currentQueryString => {
            return get(
              head(await db.exec(currentQueryString)),
              "values",
              []
            ).slice();
          })
        );
        const idFound = countBy(
          results.reduce((accumulator, currentValue) => {
            return currentValue.reduce((accumulator2, currentValue2) => {
              accumulator2.push(head(currentValue2));
              return accumulator2;
            }, accumulator);
          }, [])
        );
        const sortedIdFound = Object.keys(idFound).sort(function(a, b) {
          return idFound[a] - idFound[b];
        });
        semanticReturnedResults = (await Promise.all(
          sortedIdFound.map(async currentId => {
            return get(
              head(
                await db.exec(`SELECT * from files WHERE ROWID=${currentId}`)
              ),
              "values",
              []
            ).slice();
          })
        )).map(item => head(item));
      }
      event.sender.send(
        "queryResults",
        litteralReturnedResults.concat(semanticReturnedResults)
      );
    } catch (err) {
      console.log(err);
    }
  });
}
