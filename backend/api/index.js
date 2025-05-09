const express=require('express');
const cors=require('cors');
require('dotenv').config();
const app=express();
const serverless=require('serverless-http');

const mailRouter=require('../routes/mail.route.js');

app.use(express.json());
app.use(cors());

app.use('/mail',mailRouter);

app.get("/",(req,res)=>{
    res.json({"message":"Welcome to the my portfolio backend"});
})

module.exports=app;
module.exports.handler=serverless(app);