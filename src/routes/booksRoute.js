var express=require('express');  
  
var booksRouter=express.Router();  
var b_router=function(navMenu){  
    booksRouter.route("/")  
        .get(function(req,res){  
            res.render('books', {  
                title:'Books',  
                menu:navMenu  
            });  
        });  
        return booksRouter;  
}  
      
module.exports=b_router;