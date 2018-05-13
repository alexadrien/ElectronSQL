import { BrowserWindow } from "electron";

export default function() {
  return new BrowserWindow({
    width: 1080,
    height: 720
  });
}
