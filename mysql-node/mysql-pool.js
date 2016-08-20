/**
 * Created by lenovo on 2016/6/3.
 */
var mysql=require("mysql");
var pool=mysql.createPool({
    host:'localhost',
    user:'sakila',
    password:'sakila',
    database:'sakila',
    port:3306
});

var sql="select * from category";
pool.getConnection(function(err,conn){
    if(err)console.error(err);
    conn.query(sql,function(err,rows){
        if(err)console.error("query error:"+err);
        console.log(JSON.stringify(rows));
        conn.release();
    })

});