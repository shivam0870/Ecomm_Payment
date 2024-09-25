import express from "express";
import { addProduct, getProductById, getProducts, updateProductById, deleteProductById } from "../Controllers/product.js";

const router = express.Router();

//Add product
router.post('/add',addProduct)

//Get All products
router.get('/all',getProducts)

//gET  product by id
router.get('/:id',getProductById)

//Update product by ID
router.put('/:id', updateProductById);

//Delete product by id
router.delete('/:id', deleteProductById);

export default router;