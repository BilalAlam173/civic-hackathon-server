var journalist={
    
   list:function(callback){
    
   return db.query("Select * from journalist",callback);
    
   },
    readOne:function(id,callback){
    
   return db.query("select * from 'journalist' where 'Id'=?",[id],callback);
    },
    create:function(citizen,callback){
    return db.query("INSERT INTO `journalist`(`Id`, `FullName`, `Email`, `Phone`, `Designation`, `Firm`,`isApproved`, `Password`) values(?,?,?,?,?,?,?,?)",
    [
        journalist.Id,
        journalist.FullName,
        journalist.Email,
        journalist.Phone,
        journalist.Designation,
        journalist.Firm,
        journalist.isApproved,
        journalist.Password]
        ,callback);
    },
    delete:function(id,callback){
     return db.query("delete from 'journalist' where 'ID'=?",[id],callback);
    },
    update:function(id,FullName,Email,Designation,Phone,Address,DOB,Password,callback){
     return db.query("UPDATE `journalist` SET `FullName`=?,`Email`=?,`Designation`=?,`Phone`=?,`Address`=?,`DOB`=?,`Password`=? where 'ID'=?",
     [
        journalist.FullName,
        journalist.Email,
        journalist.Designation,
        journalist.Phone,
        journalist.Address,
        journalist.DOB,
        journalist.Password,
        ]
        ,callback);
    }
    
   };

   module.exports=journalist;
   /*
   `ID`=[value-1],
   `FullName`=[value-2],
   `Email`=[value-3],
   `Designation`=[value-4],
   `Phone`=[value-5],
   `Address`=[value-6],
   `DOB`=[value-7],
   `Password`=[value-8]
   */