var express=require('express');  
var mongodb=require('mongodb').MongoClient;  
var articlesRouter=express.Router();  
var a_router=function(navMenu){  
    articlesRouter.route("/")  
        .get(function(req,res){  
            var url='mongodb://localhost:27017/NodeDemoWebApp';  
            mongodb.connect(url,function(err,db){  
                var collection=db.collection('articles');  
                collection.find({}).toArray(function(err,results){  
                    res.render('articles', {  
                        title:'Articles',  
                        menu:navMenu,  
                        articles:results  
                    });  
                });  
            });  
        });  
        return articlesRouter;  
}  
      
module.exports=a_router;