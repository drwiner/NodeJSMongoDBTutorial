var express=require('express');  
  
var contactRouter=express.Router();  
var c_router=function(navMenu){   
    contactRouter.route("/")  
        .get(function(req,res){  
            res.render('contact', {  
                title:'Contact Us',  
                menu:navMenu  
            });  
        });  
        return contactRouter;  
}  
module.exports=c_router;  