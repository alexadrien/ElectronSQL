import readline from "readline";
import fs from "fs";

export default function() {
  return new Promise(function(resolve, reject) {
    const rl = readline.createInterface({
      input: fs.createReadStream("./sampleNames/samples.csv")
    });

    let files = [];

    rl.on("line", function(line) {
      files.push(
        line
          .split(";")
          .reverse()
          .join("/")
      );
    });

    rl.on("close", () => {
      resolve(files);
    });
  });
}
