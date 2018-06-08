import { BrowserWindow } from "electron";

export default function() {
  return new BrowserWindow({
    width: 13240, //maximum possible
    height: 5500
  });
}
