var express=require('express');  
var passport=require('passport');  
var loginRouter=express.Router();  
var l_router=function(navMenu){  
    loginRouter.route("/")  
        .post(passport.authenticate('local',{  
            failureRedirect:'/login'  
        }),function(req,res){  
                res.redirect('/articles')  
            }  
        )  
        .get(function(req,res){  
                res.render('login', {  
                    title:'Login',  
                    menu:navMenu,  
                    message:''  
                });  
        });  
        return loginRouter;  
}     
module.exports=l_router;  