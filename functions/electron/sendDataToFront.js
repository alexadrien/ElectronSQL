import getAllDbData from "./../db/getAllDbData";

export default async function(win, db) {
  const currentData = await getAllDbData(db);
  await win.webContents.send("db-data", currentData[0].values);
}
