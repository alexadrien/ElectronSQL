import path from "path";

export default async function(filePath, thedb) {
  const fileExt = path.extname(filePath).substring(1);
  const fileName = path.basename(filePath, "." + fileExt);

  const queryString = `INSERT INTO 'files' 
  (filename, extname, completepath) 
  VALUES ("${fileName}","${fileExt}","${filePath}");`;
  await thedb.run(queryString);
}
