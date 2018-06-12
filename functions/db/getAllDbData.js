export default async function(db) {
  return await db.exec("SELECT filename, completepath FROM `files`");
}
