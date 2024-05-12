const express = require("express");
const bodyParser = require('body-parser');
const Port =2999;
const {Authentication}=require("./middleware/Auth")

const server = express();

server.use(express.json());

function logger(req,res,next){
    console.log(`${req.method} ${req.url}`);
    next();
}

server.use(logger);

server.get("/order",Authentication,(req,res)=>{
   res.status(400).json({
    data: [
        { productId: "P001", qrt: 4 },
        { productId: "P002", qrt: 8 },
        { productId: "P003", qrt: 5 },
      ],
   })
})

server.listen(Port,()=>{
    console.log("server started");
})