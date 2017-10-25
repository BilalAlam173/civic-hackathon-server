const db = require("./dbconnection");
var Issue_citizen_relation = {

    list: function(callback) {

        return db.query("Select * from Issue_citizen_relation", callback);

    },
    readOne: function(id, callback) {

        return db.query("select * from Issue_citizen_relation where Id=?", [id], callback);
    },
    create: function(Issue_citizen_relation, callback) {
        return db.query("INSERT INTO `Issue_citizen_relation`(`Id`, `Date`, `Issue_Id`, `Citizen_Id`) values(?,?,?,?)", [
            null,
            Issue_citizen_relation.Date,
            Issue_citizen_relation.Issue_Id,
            Issue_citizen_relation.Citizen_Id
        ], callback);
    },
    delete: function(id, callback) {
        return db.query("delete from Issue_citizen_relation where Id=?", [id], callback);
    },
    update: function(Issue_citizen_relation, callback) {
        return db.query("UPDATE `Issue_citizen_relation` SET `Date`=?,`Issue_Id`=?,`Citizen_Id`=? where 'Id'=?", [
            Issue_citizen_relation.Date,
            Issue_citizen_relation.Issue_Id,
            Issue_citizen_relation.Citizen_Id,
            Issue_citizen_relation.Id
        ], callback);
    }

};

module.exports = Issue_citizen_relation;
/*
`ID`=[value-1],
`Date`=[value-2],
`Issue_Id`=[value-3],
`Citizen_Id`=[value-4]
*/