import fs from "fs";
import SQL from "sql.js";

export default async function() {
  var db = new SQL.Database();
  const initStr = fs.readFileSync("db_init.sql", "utf8");
  await db.run(initStr);
  return db;
}
