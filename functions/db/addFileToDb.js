import path from "path";

export default async function(filePath, thedb) {
  const fileExt = path.extname(filePath).substring(1);
  const fileName = path.basename(filePath, "." + fileExt);

  var queryString = "INSERT INTO `files` VALUES ('";
  queryString += fileName;
  queryString += "', '";
  queryString += "', '";
  queryString += fileExt;
  queryString += "', '";
  queryString += filePath;
  queryString += "');";
  await thedb.run(queryString);
}
