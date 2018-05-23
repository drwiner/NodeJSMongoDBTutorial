var express=require('express');  
var mongodb=require('mongodb').MongoClient;  
var usersRouter=express.Router();  
var u_router=function(navMenu){  
    usersRouter.route("/")  
        .get(function(req,res){  
                res.render('register', {  
                    title:'Registration',  
                    menu:navMenu  
                });  
  
        })
		.post(function(req,res){
			console.log(req.body);  
		});
        return usersRouter;  
}     
module.exports=u_router;