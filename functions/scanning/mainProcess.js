import createDatabase from "./../db/createDatabase";
import askForPath from "./../electron/askForPath";
import sendDataToFront from "./../electron/sendDataToFront";
import exploreDirList from "./../folder/exploreDirList";
import readMetaFromFile from "./../meta/readMetaFromFile";
import extractMetaValues from "./../meta/extractMetaValues";

export default async function(win, db) {
  db = await createDatabase();
  const pathToParse = await askForPath();
  const allFiles = await exploreDirList(pathToParse);

  allFiles.forEach(function(filePath) {
    const currentMeta = readMetaFromFile(filePath);
    if (currentMeta != undefined) {
      const extractedMetaData = extractMetaValues(currentMeta);
      console.log(extractedMetaData);
    }
  });
  // await sendDataToFront(win, db);
}
