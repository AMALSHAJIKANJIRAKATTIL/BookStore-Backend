const router=require('express').Router();
const book=require('../models/books/bookModel')


router.post('/',async (req,res)=>{
    try{
    console.log(req.body);

    await book.insertMany(req.body);

    res.send("Post")
    }catch(e){
        res.status(500).send(e)
    }
})

router.get('/:id',async (req,res)=>{
    try{
    const id=req.params.id;
    const response=await book.findOne({_id : id})
    res.send(response);
    }catch(e){
        res.status(500).send(e)
    }
})

module.exports=router;