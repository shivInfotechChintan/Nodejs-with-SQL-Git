const mysql = require('mysql');

const dbConn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'node_mysql_crud_db'
});

dbConn.connect(err => {
    if (err) {
        throw err;
    }

    console.log("Database Connection Successfull");
});

module.exports = dbConn;