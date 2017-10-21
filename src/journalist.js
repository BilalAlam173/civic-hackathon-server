const db = require("./dbconnection");
var journalist = {

    list: function(callback) {

        return db.query("Select * from journalist", callback);

    },
    readOne: function(id, callback) {

        return db.query("select * from journalist where Id=?", [id], callback);
    },
    create: function(journalist, callback) {
        return db.query("INSERT INTO `journalist`(`Id`, `FullName`, `Email`, `Phone`, `Designation`, `Firm`,`IsApproved`, `Password`) values(?,?,?,?,?,?,?,?)", [
            null,
            journalist.FullName,
            journalist.Email,
            journalist.Phone,
            journalist.Designation,
            journalist.Firm,
            true,
            journalist.Password
        ], callback);
    },
    auth: function(email, password, callback) {
        console.log(email + " - " + password);
        return db.query("SELECT * FROM `journalist` WHERE Email=? AND Password=?", [
            email,
            password
        ], callback);
    },
    delete: function(id, callback) {
        return db.query("delete from journalist where Id=?", [id], callback);
    },
    update: function(journalist, callback) {
        return db.query("UPDATE `journalist` SET `FullName`=?,`Email`=?,`Phone`=?,`Designation`=?,`Firm`=?,`IsApproved`=?,`Password`=? where 'Id'=?", [
            journalist.FullName,
            journalist.Email,
            journalist.Phone,
            journalist.Designation,
            journalist.Firm,
            true,
            journalist.Password,
            journalist.Id
        ], callback);
    }

};

module.exports = journalist;
/*
`ID`=[value-1],
`FullName`=[value-2],
`Email`=[value-3],
`Phone`=[value-4],
`Designation`=[value-5],
`Firm`=[value-6],
`IsApproved`=[value-7],
`Password`=[value-8]
*/