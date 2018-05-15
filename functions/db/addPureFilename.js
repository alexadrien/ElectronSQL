import path from "path";

export default async function(rowid, purefilename, thedb) {
  const queryString =
    "UPDATE `files` SET purefilename = '" +
    purefilename +
    "' WHERE ROWID=" +
    rowid;
  await thedb.run(queryString);
}
