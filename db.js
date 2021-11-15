//require mysql2
const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'user',
    database: 'data'
});

pool.execute('SELECT * FROM marksheet', (err, res) => {
    // console.log(res)
    res.forEach(element => {
        // console.log(element.marks)
    })
});
module.exports = pool.promise();
