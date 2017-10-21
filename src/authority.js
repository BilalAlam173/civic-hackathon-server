const db = require("./dbconnection");

var authority = {

    list: function(callback) {

        return db.query("Select * from authority", callback);

    },
    readOne: function(id, callback) {

        return db.query("select * from authority where ID=?", [id], callback);
    },
    create: function(authority, callback) {
        return db.query("INSERT INTO `authority`(`ID`, `FullName`, `Email`, `Designation`, `Phone`, `Address`, `DOB`, `Password`) values(?,?,?,?,?,?,?,?)", [
            null,
            authority.FullName,
            authority.Email,
            authority.Designation,
            authority.Phone,
            authority.Address,
            authority.DOB,
            authority.Password
        ], callback);
    },
    auth:function(email,password,callback){
        console.log(email+" - "+password);
        return db.query("SELECT * FROM `authority` WHERE email=? AND Password=?",
        [
            email,
            password
        ],callback);
        },
    delete: function(id, callback) {
        return db.query("delete from authority where ID=?", [id], callback);
    },
    update: function(authority, callback) {
        return db.query("UPDATE `authority` SET `FullName`=?,`Email`=?,`Designation`=?,`Phone`=?,`Address`=?,`DOB`=?,`Password`=? where ID=?", [
            authority.FullName,
            authority.Email,
            authority.Designation,
            authority.Phone,
            authority.Address,
            authority.DOB,
            authority.Password,
            authority.ID
        ], callback);
    }

};

module.exports = authority;
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