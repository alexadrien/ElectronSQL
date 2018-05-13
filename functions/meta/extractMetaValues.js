import assert from "assert";

export default function(metaJson) {
  var returnValue = [];
  if (metaJson.BWFXML.STEINBERG != undefined) {
    assert(metaJson.BWFXML.STEINBERG.length == 1); //For now, I don't know
    // are supposed to be meta xml
    assert(metaJson.BWFXML.STEINBERG[0].ATTR_LIST.length == 1);
    for (var i in metaJson.BWFXML.STEINBERG[0].ATTR_LIST[0].ATTR) {
      returnValue.push({
        metaname: metaJson.BWFXML.STEINBERG[0].ATTR_LIST[0].ATTR[i].NAME[0],
        metavalue: metaJson.BWFXML.STEINBERG[0].ATTR_LIST[0].ATTR[i].VALUE[0]
      });
    }
  }
  return returnValue;
}
