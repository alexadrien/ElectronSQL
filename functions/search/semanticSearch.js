export default function(queryString) {
    return (`SELECT * FROM files WHERE UPPER(filename) LIKE '%${queryString.toUpperCase()}%'`);
}
