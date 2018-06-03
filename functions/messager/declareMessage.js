import litteralSearch from "../search/litteralSearch";
import semanticSearch from "../search/semanticSearch";
import get from "lodash/get";
import head from "lodash/head";

export default function(ipcMain, db) {
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
        const semanticString = semanticSearch(queryString);
        const semanticResults = await db.exec(semanticString);

        semanticReturnedResults = get(
          head(semanticResults),
          "values",
          []
        ).slice();
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
