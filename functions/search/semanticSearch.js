export default function(queryString) {
    return (`SELECT * FROM files WHERE UPPER(purefilename) LIKE '%${queryString.toUpperCase()}%'`);
}
