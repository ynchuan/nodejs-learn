/**
 * Created by wangxunxun on 2016/4/9.
 */
var mysql = require("mysql");
var con = mysql.createConnection({
    host: "localhost",
    user: "sakila",
    password: "sakila",
    database: "sakila",
    port: 3306
});
con.connect();

module.exports=function(sql,cb){
    con.query(sql,function(er,rows,fields){
        cb&&cb(JSON.stringify(rows));
    });
    //con.end();  //何时关闭连接？为了保证后续继续能使用，不关闭？
}
