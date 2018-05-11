const { app, BrowserWindow, dialog } = require("electron");
const path = require("path");
const url = require("url");
var SQL = require("sql.js");
var fs = require("fs");
var assert = require("assert");
var xmlParseString = require("xml2js").parseString;
var functions = require("./functions.js");

let win;
let db;

function createWindow() {
  win = new BrowserWindow({
    width: 800,
    height: 600
  });

  win.loadURL(
    url.format({
      pathname: path.join(__dirname, "index.html"),
      protocol: "file:",
      slashes: true
    })
  );

  // win.webContents.openDevTools()

  db = functions.createDatabase();

  const pathToParse = dialog.showOpenDialog(
    {
      properties: ["openFile", "openDirectory", "multiSelections"],
      title: "Please select which folder you would like to analyze"
    },
    function(filePaths, bookmarks) {
      for (var i in filePaths) {
        functions.exploreDirList(filePaths[i], function(item) {
          functions.addFileToDb(item, db);
        });
      }
      const currentData = getAllDbData();
      win.webContents.send("db-data", currentData[0].values);
    }
  );

  win.on("closed", () => {
    win = null;
  });
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (win === null) {
    createWindow();
  }
});

function getAllDbData() {
  return db.exec("SELECT * FROM `files`");
}
