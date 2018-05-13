import exploreDirList from "./../folder/exploreDirList";
import addFileToDb from "./../db/addFileToDb";

export default function(pathToParse, db) {
  for (var i in pathToParse) {
    exploreDirList(pathToParse[i], function(item) {
      addFileToDb(item, db);
    });
  }
}
