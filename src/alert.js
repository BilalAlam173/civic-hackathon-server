const db = require("./dbconnection");
var Alert = {

    list: function(callback) {

        return db.query("Select * from Alert", callback);

    },
    readOne: function(id, callback) {

        return db.query("select * from Alert where Id=?", [id], callback);
    },
    create: function(Alert, callback) {
        return db.query("INSERT INTO `Alert`(`Id`, `Title`, `Description`, `Authority_ID`) values(?,?,?,?)", [
            null,
            Alert.Title,
            Alert.Description,
            Alert.Authority_ID
        ], callback);
    },
    delete: function(id, callback) {
        return db.query("delete from Alert where Id=?", [id], callback);
    },
    update: function(Alert, callback) {
        return db.query("UPDATE `Alert` SET `Title`=?,`Description`=?,`Authority_ID`=? where 'Id'=?", [
            Alert.Title,
            Alert.Description,
            Alert.Authority_ID,
            Alert.Id
        ], callback);
    }

};

module.exports = Alert;
/*
`ID`=[value-1],
`Title`=[value-2],
`Description`=[value-3],
`Authority_ID`=[value-4]
*/