var db=require('../dbconnection');
var user={
    getAllUser:function(callback){
        return db.query("select * from user",callback);
    },
    getLogById:function(id,item,callback){
        return db.query("select * from user where Email_Id=? AND Password=?",[id,item.Password],callback);
    },
    getUserById:function(id,callback){
        return db.query("select * from user where Email_Id=?",[id],callback);
    },
    addUser:function(item,callback){
        return db.query("insert into user values (?,?,?,?,?,?,?)",[item.Email_Id,item.Password,item.Username,item.Mobile,item.City,item.Gender,item.Address],callback);
    },
    updateUser:function(id,item,callback){
        return db.query("update user set Username=?,Mobile=?,City=?,Gender=?,Address=? where Email_Id=?",[item.Username,item.Mobile,item.City,item.Gender,item.Address,id],callback);
    },
    changepass:function(item,callback){
        return db.query("update user set Password=? where Email_Id=?",[item.Password,item.Email_Id],callback);
    }
};
module.exports=user;