const db = require("./dbconnection");

var Authority = {

    list: function(callback) {

        return db.query("Select * from Authority", callback);

    },
    readOne: function(id, callback) {

        return db.query("select * from Authority where ID=?", [id], callback);
    },
    create: function(Authority, callback) {
        return db.query("INSERT INTO `Authority`(`ID`, `FullName`, `Email`, `Designation`, `Phone`, `Address`, `DOB`, `Password`) values(?,?,?,?,?,?,?,?)", [
            null,
            Authority.FullName,
            Authority.Email,
            Authority.Designation,
            Authority.Phone,
            Authority.Address,
            Authority.DOB,
            Authority.Password
        ], callback);
    },
    auth:function(email,password,callback){
        console.log(email+" - "+password);
        return db.query("SELECT * FROM `Authority` WHERE email=? AND Password=?",
        [
            email,
            password
        ],callback);
        },
    delete: function(id, callback) {
        return db.query("delete from Authority where ID=?", [id], callback);
    },
    update: function(Authority, callback) {
        return db.query("UPDATE `Authority` SET `FullName`=?,`Email`=?,`Designation`=?,`Phone`=?,`Address`=?,`DOB`=?,`Password`=? where ID=?", [
            Authority.FullName,
            Authority.Email,
            Authority.Designation,
            Authority.Phone,
            Authority.Address,
            Authority.DOB,
            Authority.Password,
            Authority.ID
        ], callback);
    }

};

module.exports = Authority;
/*
`ID`=[value-1],
`FullName`=[value-2],
`Email`=[value-3],
`Designation`=[value-4],
`Phone`=[value-5],
`Address`=[value-6],
`DOB`=[value-7],
`Password`=[value-8]
*/