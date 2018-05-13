import path from "path";
import readMetaFromFile from "../meta/readMetaFromFile";
import extractMetaValues from "../meta/extractMetaValues";

export default async function(filePath, thedb) {
  const fileExt = path.extname(filePath).substring(1);
  const fileName = path.basename(filePath, "." + fileExt);
  const currentFileMeta = readMetaFromFile(filePath);
  if (currentFileMeta != undefined) {
    const extractedMetaData = extractMetaValues(currentFileMeta);
    for (var i in extractedMetaData) {
      var queryString = "INSERT INTO `files` VALUES ('";
      queryString += fileName;
      queryString += "', '";
      queryString += fileExt;
      queryString += "', '";
      queryString += filePath;
      queryString += "', '";
      queryString += extractedMetaData[i].metaname;
      queryString += "', '";
      queryString += extractedMetaData[i].metavalue;
      queryString += "');";
      await thedb.run(queryString);
    }
  }
}
