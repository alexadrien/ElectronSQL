var fs = require("fs");
var SQL = require("sql.js");
var path = require("path");
var readMetaFromFile = require("./meta.js").readMetaFromFile;
var extractMetaValues = require("./meta.js").extractMetaValues;

module.exports = {
  createDatabase: function() {
    var db = new SQL.Database();
    const initStr = fs.readFileSync("db_init.sql", "utf8");
    db.run(initStr);
    return db;
  },
  addFileToDb: function(filePath, thedb) {
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
        thedb.run(queryString);
      }
    }
  }
};
