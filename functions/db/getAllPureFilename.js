export default async function(db) {
  return await db.exec("SELECT ROWID, purefilename FROM `files`");
}
