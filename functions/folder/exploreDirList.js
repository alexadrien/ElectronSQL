import fs from "fs";
import path from "path";

export default function(dirpath, fileCallback) {
  var foldersToExplore = [dirpath];
  while (foldersToExplore.length > 0) {
    var currentDirList = fs.readdirSync(foldersToExplore[0]);
    for (var i in currentDirList) {
      var currentCompletePath = path.join(
        foldersToExplore[0],
        currentDirList[i]
      );
      var isDir = fs.lstatSync(currentCompletePath).isDirectory();
      if (isDir) {
        foldersToExplore.push(currentCompletePath);
      } else {
        fileCallback(currentCompletePath);
      }
    }
    foldersToExplore.shift();
  }
}
