const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
const app=express();
const router=require('./routes/bookRoutes')
app.use(express.json());
app.use(cors());
app.use('/books',router)

mongoose.connect('mongodb://localhost/bookStore',{useNewUrlParser:true},{useUnifiedTopology:true})
.then(()=>console.log('Connected successsfully'))
.catch(err=>console.log(err))


app.get('/',(req,res)=>{
    res.send("Home");
})

app.listen(3000,()=>{
    console.log("listening on 3000...");
})