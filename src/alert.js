const db = require("./dbconnection");
var alert = {

    list: function(callback) {

        return db.query("Select * from alert", callback);

    },
    readOne: function(id, callback) {

        return db.query("select * from alert where Id=?", [id], callback);
    },
    create: function(alert, callback) {
        return db.query("INSERT INTO `alert`(`Id`, `Title`, `Description`, `Authority_ID`) values(?,?,?,?)", [
            null,
            alert.Title,
            alert.Description,
            alert.Authority_ID
        ], callback);
    },
    delete: function(id, callback) {
        return db.query("delete from alert where Id=?", [id], callback);
    },
    update: function(alert, callback) {
        return db.query("UPDATE `alert` SET `Title`=?,`Description`=?,`Authority_ID`=? where 'Id'=?", [
            alert.Title,
            alert.Description,
            alert.Authority_ID,
            alert.Id
        ], callback);
    }

};

module.exports = alert;
/*
`ID`=[value-1],
`Title`=[value-2],
`Description`=[value-3],
`Authority_ID`=[value-4]
*/