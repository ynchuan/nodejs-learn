var mysql = require('mysql');
var connection = null;
var dbHelper = function (opt) {
    connection = mysql.createConnection({
        host: 'localhost' || opt.ip,
        user: 'dbuser' || opt.user,
        password: 's3kreee7' || opt.pwd
    });
    return dbHelper;
};
dbHelper.query = function (sql) {
    var result;
    connection.connect();
    connection.query(sql, function (err, rows, fields) {
        if (err) throw err;
        result = rows[0].solution;
        console.log('The solution is: ', rows[0].solution);
    });
    connection.end();
    return result;
};
exports = dbHelper;