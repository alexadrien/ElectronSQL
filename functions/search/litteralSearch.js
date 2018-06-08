import sansAccent from 'sans-accent';

export default function(queryString) {
  return `SELECT * FROM files WHERE UPPER(filename) LIKE '%${sansAccent()(queryString).toUpperCase()}%'`;
}
