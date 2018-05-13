export default async function(db) {
  return await db.exec("SELECT * FROM `files`");
}
