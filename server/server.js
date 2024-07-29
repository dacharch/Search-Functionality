const express = require('express');
const mongoose = require('mongoose') ; 
const cors = require('cors') ;


const app = express() ;

app.use(cors()) ;

mongoose.connect('mongodb://127.0.0.1:27017/shoes',{  useNewUrlParser: true, useUnifiedTopology: true });

app.get("/",(req,res)=>{
     res.send("Server is Running ") ;
})

const shoeSchema = new mongoose.Schema({
    brand:String,
    model:String,
    color:String,
    size:Number,
    price:Number
})


const Shoe = mongoose.model('shoes',shoeSchema) ;

app.get('/shoe',async(req,res)=>{
  const s =  req.query.search ?{
     $or:[
        {brand:{$regex:req.query.search, $options:"i"}
    
        }
     ]
  }:{}

  const shoesName = await Shoe.find(s) ;
  res.send(shoesName)
})

app.get('/shoes',async(req,res)=>{
     try{
         const shoes = await Shoe.find({}) ;
         res.json(shoes) ;
     }catch(err){
         res.status(500).send(err) ;
     }
})



app.listen(4040,()=>{
    console.log("Server is Running ") ;
}) ;
