const express=require('express');
const router=express.Router();
const Book=require('../model/Book');


//get all books
router.get("/", async (req, res, next) => {
    let books;
    try {
        books = await Book.find()
    }
    catch (err) {
        console.log(err)
    }
    if(!books){
        return res.status(400).json({message:"No books found"})
    }
    return res.status(200).json({books})
})

//get a single book by Id
router.get('/:id',async(req,res,next)=>{
    let book;
    try{
        book= await Book.find({_id:req.params.id})
    }
    catch (err) {
        console.log(err)
    }
    if(!book){
        return res.status(400).json({message:"No books found"})
    }
    return res.status(200).json({book})
})

//post a book
router.post('/',async(req,res,next)=>{
    let book;
  try{
     book=new Book({
        name:req.body.name,
        author:req.body.author,
        description:req.body.description,
        price:req.body.price,
        available:req.body.available,
        image:req.body.image
    })
    await book.save()
  }
  catch(err){
    console.log(err)
  }
  if(!book){
    return res.status(404).json({message:"Book not added"})
  }
  return res.status(200).json({book})
})

//Update book
router.put('/:id',async(req,res,next)=>{
    let book;
    //let id=req.params.id;
    try{
        book=await Book.findByIdAndUpdate({_id:req.params.id},{
            name:req.body.name,
            author:req.body.author,
            description:req.body.description,
            price:req.body.price,
            available:req.body.available
            
        })
        book=await book.save()
    }
    catch(err){
        console.log(err);
    }
    if(!book){
        return res.status(404).json({message:"Book not updated"}) 
    }
    return res.status(200).json({book})
})

//delete a book
router.delete('/:id',async (req,res,next) => {
    let book;
    try{
        book=await Book.findByIdAndDelete({_id:req.params.id})
    }
    catch(err) {
        console.log(err)
    }
    if(!book){
        return res.status(404).json({message:"Book not deleted"})  
    }
    return res.status(200).json({book})
})
module.exports=router;