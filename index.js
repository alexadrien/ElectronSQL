import "babel-polyfill";
import loadWindow from "./functions/electron/loadWindow";
import newWindow from "./functions/electron/newWindow";
import { app, BrowserWindow, webContents } from "electron";
import mainProcess from "./functions/scanning/mainProcess";

let win;
let db;

async function createWindow() {
  win = newWindow();
  win = await loadWindow(win);

  win.on("show", async () => {
    win.webContents.on("did-finish-load", function() {
      mainProcess(win, db);
    });
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
