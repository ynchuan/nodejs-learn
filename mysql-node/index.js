/**
 * Created by wangxunxun on 2016/4/9.
 */
var mysql = require("mysql");
var con = mysql.createConnection({
    host: "localhost",
    user: "node",
    password: "node",
    database: "sakila",
    port: 3306
});
con.connect();

con.query("select * from store",function(er,rows,fields){
    console.log(rows[1].last_update);
    console.log(fields[3]);
});
