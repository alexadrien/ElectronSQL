import { dialog } from "electron";
import { sleep } from "sleep";

export default async function() {
  // return dialog.showOpenDialog({
  //   properties: ["openFile", "openDirectory", "multiSelections"],
  //   title: "Please select which folder you would like to analyze"
  // });
  // sleep(1);
  return ["/Users/alex-adrienauger/Projets/ElectronSQL/folderToExplore"];
}
