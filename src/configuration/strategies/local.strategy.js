var passport = require('passport'),  
    LocalStrategy = require('passport-local').Strategy;  
var mongodb=require('mongodb').MongoClient;  
module.exports=function(){  
    passport.use(new LocalStrategy({  
        usernameField:'Email',  
        passwordField:'Password'  
    },  
    function(username, password, done) {  
        var url='mongodb://localhost:27017/NodeDemoWebApp';  
        mongodb.connect(url,function(err,db){  
            if(err){done(null,false, {message:'Invalid Credentials'});}  
            var collection=db.collection('Users');  
            collection.findOne({Email:username},function(err,results){  
                if(results.Password==password){  
                    var user=results;  
                    done(null,user);  
                }  
                else{  
                    done(null,false, {message:'Invalid Credentials'});  
                }  
            });  
        });  
    }));  
}; 