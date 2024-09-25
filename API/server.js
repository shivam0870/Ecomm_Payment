import express from 'express';
import mongoose from 'mongoose';
import userRouter from './Routes/user.js'
import bodyParser from 'express';
import productRouter from "./Routes/product.js"
import cartRouter from "./Routes/cart.js"

const app = express();

app.use(bodyParser.json());
app.get('/', (req,res) => {
    res.json({
        message : "Hello  from server"
    })
})

//User Router
app.use('/api/user', userRouter);

//Product Router
app.use('/api/product', productRouter);

//Cart Router
app.use('/api/cart', cartRouter);

mongoose.connect("mongodb+srv://shivamkrsingh4688:Mof0mTF2Iiv31q11@cluster0.wry4o.mongodb.net/", {
    dbName : "MERN-Ecommerce"
}).then (() => {
console.log("MongoDB Connected Successfully")
}).catch((err) => {
console.log(err);
})

const port = 1000;

app.listen(port, () => {
    console.log(`Server is running at port ${port}`)
})

