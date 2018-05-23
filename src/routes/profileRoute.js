var express=require('express');  
  
var profileRouter=express.Router();  
var p_router=function(navMenu){  
    profileRouter.route("/")
		.all(function(req,res,next){
			if(!req.user){
				res.redirect('/login');
			}
		})
        .get(function(req,res){  
            res.json(req.user);  
        });  
        return profileRouter;  
}  
      
module.exports=p_router; 