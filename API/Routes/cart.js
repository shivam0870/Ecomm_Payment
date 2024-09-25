import express from "express";
import { addToCart, clearCart, removeProductFromCart, userCart } from "../Controllers/cart.js";

const router = express.Router();

//add to cart
router.post('/add',addToCart)

//get user cart
router.get('/user', userCart);

//Remove product from cart
router.delete('/remove/:productId', removeProductFromCart);

//Clear cart

router.delete('/clear', clearCart);

export default router;