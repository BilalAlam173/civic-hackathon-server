const db = require("./dbconnection");
var Journalist = {

    list: function(callback) {

        return db.query("Select * from Journalist", callback);

    },
    readOne: function(id, callback) {

        return db.query("select * from Journalist where Id=?", [id], callback);
    },
    create: function(Journalist, callback) {
        return db.query("INSERT INTO `Journalist`(`Id`, `FullName`, `Email`, `Phone`, `Designation`, `Firm`,`IsApproved`, `Password`) values(?,?,?,?,?,?,?,?)", [
            null,
            Journalist.FullName,
            Journalist.Email,
            Journalist.Phone,
            Journalist.Designation,
            Journalist.Firm,
            true,
            Journalist.Password
        ], callback);
    },
    auth: function(email, password, callback) {
        console.log(email + " - " + password);
        return db.query("SELECT * FROM `Journalist` WHERE Email=? AND Password=?", [
            email,
            password
        ], callback);
    },
    delete: function(id, callback) {
        return db.query("delete from Journalist where Id=?", [id], callback);
    },
    update: function(Journalist, callback) {
        return db.query("UPDATE `Journalist` SET `FullName`=?,`Email`=?,`Phone`=?,`Designation`=?,`Firm`=?,`IsApproved`=?,`Password`=? where 'Id'=?", [
            Journalist.FullName,
            Journalist.Email,
            Journalist.Phone,
            Journalist.Designation,
            Journalist.Firm,
            true,
            Journalist.Password,
            Journalist.Id
        ], callback);
    }

};

module.exports = Journalist;
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