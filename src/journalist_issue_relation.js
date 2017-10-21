const db = require("./dbconnection");
var journalist_issue_relation = {

    list: function(callback) {

        return db.query("Select * from journalist_issue_relation", callback);

    },
    readOne: function(id, callback) {

        return db.query("select * from journalist_issue_relation where Id=?", [id], callback);
    },
    create: function(journalist_issue_relation, callback) {
        return db.query("INSERT INTO `journalist_issue_relation`(`Id`, `Date`, `Journalist_Id`, `Issue_Id`,'CommentTitle','CommentMessage') values(?,?,?,?,?,?)", [
            null,
            journalist_issue_relation.Date,
            journalist_issue_relation.Journalist_Id,
            journalist_issue_relation.Issue_Id,
            journalist_issue_relation.CommentTitle,
            journalist_issue_relation.CommentMessage
        ], callback);
    },
    delete: function(id, callback) {
        return db.query("delete from journalist_issue_relation where Id=?", [id], callback);
    },
    update: function(journalist_issue_relation, callback) {
        return db.query("UPDATE `journalist_issue_relation` SET `Date`=?,`Journalist_Id`=?,`Issue_Id`=?,`CommentTitle`=?,`CommentMessage`=? where 'Id'=?", [
            journalist_issue_relation.Date,
            journalist_issue_relation.Journalist_Id,
            journalist_issue_relation.Issue_Id,
            journalist_issue_relation.CommentTitle,
            journalist_issue_relation.CommentMessage,
            journalist_issue_relation.Id
        ], callback);
    }

};

module.exports = journalist_issue_relation;
/*
`ID`=[value-1],
`Date`=[value-2],
`Journalist_Id`=[value-3]
`Issue_Id`=[value-4],
`CommentTitle`=[value-5],
`CommentMessage`=[value-6],
*/