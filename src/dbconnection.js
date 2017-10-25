var mysql=require('mysql');
var connection=mysql.createPool({

host:'sql12.freemysqlhosting.net',
user:'sql12201245',
password:'Aj3wnHkTyF',
database:'sql12201245'

});
module.exports=connection;