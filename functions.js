module.exports = {
  readMetaFromFile: require("./functions/meta.js").readMetaFromFile,
  createDatabase: require("./functions/db.js").createDatabase,
  addFileToDb: require("./functions/db.js").addFileToDb,
  exploreDirList: require("./functions/folder.js").exploreDirList
};
