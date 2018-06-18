var user=require("../model/user_model");
var express = require("express");
var router = express.Router();
router.get('/:id',function(req,res,next){
    user.getUserById(req.params.id,function(err,rows){
        if(err)
        {
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});
router.post('/:id?',function(req,res,next){
    if(req.params.id){
        user.getLogById(req.params.id,req.body,function(err,rows){
            if(err){
                res.json(err);
            }
            else{
                res.json(rows);
            }
        
        });
    }
    else{
        user.addUser(req.body,function(err,rows){
            if(err){
                res.json(err);
            }
            else{
                res.json(rows);
            }
        });
    }
    });
    router.put('/:id?',function(req,res,next){
        if(req.params.id){
            user.updateUser(req.params.id,req.body,function(err,rows){
                if(err)
                {
                    res.json(err);
                }
               else{
                    res.json(rows);
                }
            });    
        }
        else{
            user.changepass(req.body,function(err,rows){
                if(err)
                {
                    res.json(err);
                }
                else{
                    res.json(rows);
                }
            });
        }
    }); 
    module.exports=router;