function Authentication(req,res,next){
   //It will check for Athetication valid user name and pass
   console.log("Hello Auth")
   next();
}

module.exports ={
    Authentication
}