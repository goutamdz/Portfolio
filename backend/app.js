const express=require('express');
const cors=require('cors');
require('dotenv').config();
const app=express();

const mailRouter=require('./routes/mail.route.js');

app.use(express.json());
app.use(cors());

app.use('/mail',mailRouter);

app.get('/',(req,res)=>{
    res.send('Welcome to the backend of my portfolio!');
})

app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
})