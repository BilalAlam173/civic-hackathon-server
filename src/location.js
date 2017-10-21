const db = require("./dbconnection");
var location = {

    list: function(callback) {

        return db.query("Select * from location", callback);

    },
    readOne: function(id, callback) {

        return db.query("select * from location where Id=?", [id], callback);
    },
    create: function(location, callback) {
        return db.query("INSERT INTO `location`(`Id`, `Lat`, `Lang`, `Issue_Id`) values(?,?,?,?)", [
            null,
            location.Lat,
            location.Lang,
            location.Issue_Id
        ], callback);
    },
    delete: function(id, callback) {
        return db.query("delete from location where Id=?", [id], callback);
    },
    update: function(location, callback) {
        return db.query("UPDATE `location` SET `Lat`=?,`Lang`=?,`Issue_Id`=? where 'Id'=?", [
            location.Lat,
            location.Lang,
            location.Issue_Id,
            location.Id
        ], callback);
    }

};

module.exports = location;
/*
`ID`=[value-1],
`Lat`=[value-2],
`Lang`=[value-3],
`Issue_Id`=[value-4]
*/