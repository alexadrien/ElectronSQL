var meta = require("./functions/meta.js");
var db = require("./functions/db.js");
var folder = require("./functions/folder.js");

module.exports = {
  readMetaFromFile: meta.readMetaFromFile,
  createDatabase: db.createDatabase,
  addFileToDb: db.addFileToDb,
  exploreDirList: folder.exploreDirList
};
