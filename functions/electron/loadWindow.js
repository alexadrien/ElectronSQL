import url from "url";
import path from "path";

export default async win => {
  await win.loadURL(
    await url.format({
      pathname: path.join(__dirname, "..", "..", "index.html"),
      protocol: "file:",
      slashes: true
    })
  );
  win.webContents.openDevTools();
  return win;
};
