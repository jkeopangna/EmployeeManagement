// Dependencies
const mysql = require('mysql');
const { connect } = require('http2');
const util = require('util');


// Create Connection to MySQL
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '#Z3coffee',
    database: 'managementDB',
});


// Connect to Database
connection.connect((err) => {
    if (err) throw err;
    console.log(`Connected at ${connection.threadId}`);
    // start();
});

connection.query = util.promisify(connection.query)
module.exports = connection;