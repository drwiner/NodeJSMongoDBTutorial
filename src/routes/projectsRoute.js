var express=require('express');  
  
var projectsRouter=express.Router();  
var p_router=function(navMenu){  
    projectsRouter.route("/")  
        .get(function(req,res){  
            res.render('projects', {  
                title:'Projects',  
                menu:navMenu  
            });  
        });  
        return projectsRouter;  
}  
module.exports=p_router;  