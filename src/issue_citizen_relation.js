const db = require("./dbconnection");
var issue_citizen_relation = {

    list: function(callback) {

        return db.query("Select * from issue_citizen_relation", callback);

    },
    readOne: function(id, callback) {

        return db.query("select * from issue_citizen_relation where Id=?", [id], callback);
    },
    create: function(issue_citizen_relation, callback) {
        return db.query("INSERT INTO `issue_citizen_relation`(`Id`, `Date`, `Issue_Id`, `Citizen_Id`) values(?,?,?,?)", [
            null,
            issue_citizen_relation.Date,
            issue_citizen_relation.Issue_Id,
            issue_citizen_relation.Citizen_Id
        ], callback);
    },
    delete: function(id, callback) {
        return db.query("delete from issue_citizen_relation where Id=?", [id], callback);
    },
    update: function(issue_citizen_relation, callback) {
        return db.query("UPDATE `issue_citizen_relation` SET `Date`=?,`Issue_Id`=?,`Citizen_Id`=? where 'Id'=?", [
            issue_citizen_relation.Date,
            issue_citizen_relation.Issue_Id,
            issue_citizen_relation.Citizen_Id,
            issue_citizen_relation.Id
        ], callback);
    }

};

module.exports = issue_citizen_relation;
/*
`ID`=[value-1],
`Date`=[value-2],
`Issue_Id`=[value-3],
`Citizen_Id`=[value-4]
*/