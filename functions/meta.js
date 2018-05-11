var xmlParseString = require("xml2js").parseString;
var fs = require("fs");
var assert = require("assert");

module.exports = {
  readMetaFromFile: function(filePath) {
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
  },
  extractMetaValues: function(metaJson) {
    var returnValue = [];
    if (metaJson.BWFXML.STEINBERG != undefined) {
      assert(metaJson.BWFXML.STEINBERG.length == 1); //For now, I don't know
      // are supposed to be meta xml
      assert(metaJson.BWFXML.STEINBERG[0].ATTR_LIST.length == 1);
      for (var i in metaJson.BWFXML.STEINBERG[0].ATTR_LIST[0].ATTR) {
        returnValue.push({
          metaname: metaJson.BWFXML.STEINBERG[0].ATTR_LIST[0].ATTR[i].NAME,
          metavalue: metaJson.BWFXML.STEINBERG[0].ATTR_LIST[0].ATTR[i].VALUE
        });
      }
    }
    return returnValue;
  }
};
