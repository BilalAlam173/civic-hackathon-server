const db = require("./dbconnection");
var Journalist_issue_relation = {

    list: function(callback) {

        return db.query("Select * from Journalist_issue_relation", callback);

    },
    readOne: function(id, callback) {

        return db.query("select * from Journalist_issue_relation where Id=?", [id], callback);
    },
    create: function(Journalist_issue_relation, callback) {
        return db.query("INSERT INTO `Journalist_issue_relation`(`Id`, `Date`, `Journalist_Id`, `Issue_Id`,'CommentTitle','CommentMessage') values(?,?,?,?,?,?)", [
            null,
            Journalist_issue_relation.Date,
            Journalist_issue_relation.Journalist_Id,
            Journalist_issue_relation.Issue_Id,
            Journalist_issue_relation.CommentTitle,
            Journalist_issue_relation.CommentMessage
        ], callback);
    },
    delete: function(id, callback) {
        return db.query("delete from Journalist_issue_relation where Id=?", [id], callback);
    },
    update: function(Journalist_issue_relation, callback) {
        return db.query("UPDATE `Journalist_issue_relation` SET `Date`=?,`Journalist_Id`=?,`Issue_Id`=?,`CommentTitle`=?,`CommentMessage`=? where 'Id'=?", [
            Journalist_issue_relation.Date,
            Journalist_issue_relation.Journalist_Id,
            Journalist_issue_relation.Issue_Id,
            Journalist_issue_relation.CommentTitle,
            Journalist_issue_relation.CommentMessage,
            Journalist_issue_relation.Id
        ], callback);
    }

};

module.exports = Journalist_issue_relation;
/*
`ID`=[value-1],
`Date`=[value-2],
`Journalist_Id`=[value-3]
`Issue_Id`=[value-4],
`CommentTitle`=[value-5],
`CommentMessage`=[value-6],
*/