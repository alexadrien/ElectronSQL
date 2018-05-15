import path from "path";

export default function(filepath) {
  const fileExt = path.extname(filePath).substring(1);
  return path.basename(filePath, "." + fileExt);
}
