const env=require('dotenv');
const connection=require('./databse_connection/conn');
const express=require('express');
const app=express();
const cors=require('cors');
env.config();
connection();
const bodyParser=require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))


app.use(bodyParser.json())

// Port
const PORT=5000;

// Model
const book=require('./models/books/bookModel')

app.use(cors());


//Routes

const booksRoute=require('./routers/booksRouter');
const bookRoute=require('./routers/bookRouter');

app.use('/api/v1/books',booksRoute);


app.use('/api/v1/book',bookRoute);


// Listening...

app.listen(PORT,()=>console.log(`Connected on port ${PORT}`))
