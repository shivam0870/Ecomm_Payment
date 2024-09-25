import { Products } from "../Models/Product.js";

//add product

export const addProduct = async(req,res) => {
    const  {title,description,price,category,qty,imgSrc} = req.body;
    try {
       let product = await Products.create({
        title,
        description,
        price,
        category,
        qty,
        imgSrc,
       });
    res.json({
      message : "Product added successfully",  
      product
    })
    } catch (error) {
        res.json(error.message);
    }
}

//get all products
export const getProducts = async(req,res) => {
    try {
        let products = await Products.find().sort({
            createdAt : -1
        })
        res.json({
            message : "All Products",
            products
        })
    } catch (error) {
        res.json(error.message)
    }
}


//Find product by id

export const getProductById = async(req,res) => {
    const id = req.params.id;
    try {
        let product = await Products.findById(id);

        if(!product){
        return res.json({
            message : "Product Not Found"
        })
       
        }
        res.json({
            message : "Product Found",
            product
        })
    } catch (error) {
        res.json(error.message)
    }
}

//Update product by ID

export const updateProductById = async(req,res) => {
    const id = req.params.id;
    try {
        let product = await Products.findByIdAndUpdate(id,req.body,{new : true})
        if(!product){
            return res.json({
                message : 'Product with the given ID not found'
            })
        }
        res.json({
            message : "Product has been updated",
            product
        })
    } catch (error) {
        res.json(error.message)
    }
}

//Delete product by ID

export const deleteProductById = async (req,res) => {
    const id = req.params.id;
    try {
        let product = await Products.findByIdAndDelete(id);
        if(!product){
            return res.json({
                message : "The product that you want to delete is not found"
            })
        }
        res.json({
            message : "Product has been deleted",
            product
        })
    } catch (error) {
        
        res.json(error.message);
    }
}