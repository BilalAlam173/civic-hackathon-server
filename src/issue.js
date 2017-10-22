const db = require("./dbconnection");
var issue = {

    list: function(callback) {

        return db.query("Select * from issue", callback);

    },
    readOne: function(id, callback) {

        return db.query("select * from issue where Id=?", [id], callback);
    },
    customRow: function(Citizen_Id, callback) {
        console.log("abc", Citizen_Id);
        return db.query("select * from issue where Citizen_Id=?", [Citizen_Id], callback);
    },
    create: function(issue, callback) {
        return db.query("INSERT INTO `issue`(`Id`, `Title`, `Description`, `IsSolved`, `IsCovered`, `Priority`,`Category`, `Location`,'Date','Citizen_Id') values(?,?,?,?,?,?,?,?,?,?)", [
            null,
            issue.Title,
            issue.Description,
            false,
            false,
            0,
            issue.Category,
            issue.Location,
            issue.Date,
            issue.Citizen_Id
        ], callback);
    },
    delete: function(id, callback) {
        return db.query("delete from issue where Id=?", [id], callback);
    },
    update: function(issue, callback) {
        return db.query("UPDATE `issue` SET `Title`=?,`Description`=?,`IsSolved`=?,`IsCovered`=?,`Priority`=?,`Category`=?,`Location`=?,`Date`=?,`Citizen_Id`=? where 'Id'=?", [
            issue.Title,
            issue.Description,
            issue.IsSolved,
            issue.IsCovered,
            issue.Priority,
            issue.Category,
            issue.Location,
            issue.Date,
            issue.Citizen_Id,
            issue.Id
        ], callback);
    }

};

module.exports = issue;
/*
`ID`=[value-1],
`Title`=[value-2],
`Description`=[value-3],
`IsSolved`=[value-5],
`IsCovered`=[value-4],
`Priority`=[value-6],
`Category`=[value-7],
`Location`=[value-8],
`Date`=[value-9],
`Citizen_Id`=[value-10]
*/