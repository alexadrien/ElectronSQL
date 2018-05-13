import fs from "fs";
import { parseString as xmlParseString } from "xml2js";

export default function(filePath) {
  const fileBuf = fs.readFileSync(filePath);
  const chunkNameBuf = fileBuf.slice(0, 4);
  const chunkSizeBuf = fileBuf.slice(4, 8);
  const chunkFormNameBuf = fileBuf.slice(8, 12);
  const chunkDataBuf = fileBuf.slice(12);

  var currentIndex = 0;
  var ckid = -1;
  var cksz = -1;
  var ckdata;
  while (currentIndex < chunkDataBuf.length) {
    ckid = chunkDataBuf.slice(currentIndex, currentIndex + 4).toString();
    currentIndex += 4;
    cksz = chunkDataBuf.slice(currentIndex, currentIndex + 4).readUInt32LE();
    currentIndex += 4;
    ckdata = chunkDataBuf.slice(currentIndex, currentIndex + cksz);
    currentIndex += cksz;
    if (ckid == "iXML") {
      var parsedxml = {};
      xmlParseString(ckdata.toString(), function(err, result) {
        parsedxml = result;
      });
      return parsedxml;
    }
  }
}
