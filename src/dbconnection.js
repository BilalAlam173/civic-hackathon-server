var mysql=require('mysql');
var connection=mysql.createPool({
host:'sql12.freemysqlhosting.net',
user:'sql12201245',
password:'Aj3wnHkTyF',
database:'sql12201245'
});

var con = mysql.createConnection({
    host: "sql12.freemysqlhosting.net",
    user: "sql12201245",
    password: "Aj3wnHkTyF"
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });
module.exports=connection;