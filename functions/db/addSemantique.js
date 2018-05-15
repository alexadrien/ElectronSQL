export default async function(rowid, semantique, thedb) {
  const queryString =
    "UPDATE `files` SET semantique = '" +
    JSON.stringify(semantique) +
    "' WHERE ROWID=" +
    rowid;
  await thedb.run(queryString);
}
