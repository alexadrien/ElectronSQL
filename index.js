import "babel-polyfill";
import createDatabase from "./functions/db/createDatabase";
import askForPath from "./functions/electron/askForPath";
import loadWindow from "./functions/electron/loadWindow";
import newWindow from "./functions/electron/newWindow";
import sendDataToFront from "./functions/electron/sendDataToFront";
import addFilesToDb from "./functions/folder/addFilesToDb";
import { app, BrowserWindow, webContents } from "electron";

let win;
let db;

async function doSomeStuff() {
  win.webContents.on("did-finish-load", async function() {
    console.log(win.webContents.isWaitingForResponse());
    db = await createDatabase();
    const pathToParse = await askForPath();
    await addFilesToDb(pathToParse, db);
    await sendDataToFront(win, db);
  });
}

async function createWindow() {
  win = newWindow();
  win = await loadWindow(win);

  win.on("show", async () => {
    await doSomeStuff();
  });

  win.on("closed", () => {
    win = null;
  });
}

app.on("ready", () => {
  createWindow();
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

// app.on("activate", () => {
//   if (win === null) {
//     createWindow();
//   }
// });
