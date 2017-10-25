const db=require("./dbconnection");
var citizen={
    
   list:function(callback){
    
   return db.query("Select * from citizen",callback);
    
   },
    readOne:function(id,callback){
    
   return db.query("select * from citizen where Id=?",[id],callback);
    },
    create:function(citizen,callback){
        console.log(citizen);
    return db.query("INSERT INTO `citizen`(`Id`, `FullName`, `Email`, `Phone`, `CNIC`, `Address`, `Town`, `City`, `PostalCode`, `Password`, `DOB`, `Profession`) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)",
    [
        null,
        citizen.FullName,
        citizen.Email,
        citizen.Phone,
        citizen.CNIC,
        citizen.Address,
        citizen.Town,
        citizen.City,
        citizen.PostalCode,
        citizen.Password,
        citizen.DOB,
        citizen.Profession
    ],callback);
    },
    auth:function(email,password,callback){
        console.log("status: "+db.state);
        return db.query("SELECT * FROM `citizen` WHERE email=? AND Password=?",
        [
            email,
            password
        ],callback);
        },
    delete:function(id,callback){
     return db.query("delete from citizen where Id=?",[id],callback);
    },
    update:function(citizen,callback){
     return db.query("UPDATE `citizen` SET `FullName`=?,`Email`=?,`Phone`=?,`CNIC`=?,`Address`=?,`Town`=?,`City`=?,`PostalCode`=?,`Password`=?,`DOB`=?,`Profession`=? WHERE Id=?",
     [
         citizen.FullName,
         citizen.Email,
         citizen.Phone,
         citizen.CNIC,
         citizen.Address,
         citizen.Town,
         citizen.City,
         citizen.PostalCode,
         citizen.Password,
         citizen.DOB,
         citizen.Profession,
         citizen.Id
        ],callback);
    
   }
};

   module.exports=citizen;
   /*
   `Id`=[value-1],
   `FullName`=[value-2],
   `Email`=[value-3],
   `Phone`=[value-4],
   `CNIC`=[value-5],
   `Address`=[value-6],
   `Town`=[value-7],
   `City`=[value-8],
   `PostalCode`=[value-9],
   `Password`=[value-10],
   `DOB`=[value-11],
   `Profession`=[value-12]
   */