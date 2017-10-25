const db = require("./dbconnection");
var Issue = {

    list: function(callback) {

        return db.query("Select * from Issue", callback);

    },
    readOne: function(id, callback) {

        return db.query("select * from Issue where Id=?", [id], callback);
    },
    customRow: function(Citizen_Id, callback) {
        console.log("abc", Citizen_Id);
        return db.query("select * from Issue where Citizen_Id=?", [Citizen_Id], callback);
    },
    create: function(Issue, callback) {
        console.log("create",Issue);
        return db.query("INSERT INTO `Issue`(`Id`, `Title`, `Description`, `IsSolved`, `IsCovered`, `Priority`,`Category`, `lat`,`longit`,`Date`,`Citizen_Id`) values(?,?,?,?,?,?,?,?,?,?,?)", [
            null,
            Issue.Title,
            Issue.Description,
            false,
            false,
            0,
            Issue.Category,
            Issue.lat,
            Issue.longit,
            Issue.Date,
            Issue.Citizen_Id
        ], callback);
    },
    delete: function(id, callback) {
        return db.query("delete from Issue where Id=?", [id], callback);
    },
    update: function(Issue, callback) {
        return db.query("UPDATE `Issue` SET `Title`=?,`Description`=?,`IsSolved`=?,`IsCovered`=?,`Priority`=?,`Category`=?,`Location`=?,`Date`=?,`Citizen_Id`=? where 'Id'=?", [
            Issue.Title,
            Issue.Description,
            Issue.IsSolved,
            Issue.IsCovered,
            Issue.Priority,
            Issue.Category,
            Issue.Location,
            Issue.Date,
            Issue.Citizen_Id,
            Issue.Id
        ], callback);
    }

};

module.exports = Issue;
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