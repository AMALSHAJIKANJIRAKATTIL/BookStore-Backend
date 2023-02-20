const mongoose=require('mongoose');
const bookSchema=new mongoose.Schema({
    title : {type: String, required:true},
    author: {type: String, required:true},
    image: {type: String, required:true},
    publisher: {type: String, required:true},
    price: {type: String, required:true}
});

const bookModel=mongoose.model('books',bookSchema);

module.exports=bookModel;