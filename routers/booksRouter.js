const router=require('express').Router();
const book=require('../models/books/bookModel')

router.get('/',async (req,res)=>{
    try{
    let books=await book.find();
    res.send(books);
    }catch(e){
        res.status(500).send(e)
    }
})

router.get('/search',async (req,res)=>{
    try{
    const query=req.query.q;
    const result=await book.find({$or:[
        {title: {$regex: `${query}`, $options: 'i'}},
        {author: {$regex: `${query}`, $options: 'i'}},
        {publisher: {$regex: `${query}`, $options: 'i'}}]});
    res.send(result)
    }catch(e){
        res.status(500).send(e);
    }
})

module.exports=router;