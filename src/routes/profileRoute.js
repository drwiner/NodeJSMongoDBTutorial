var express=require('express');  
  
var profileRouter=express.Router();  
var p_router=function(navMenu){  
    profileRouter.route("/")  
        .get(function(req,res){  
            res.json(req.user);  
        });  
        return profileRouter;  
}  
      
module.exports=p_router; 